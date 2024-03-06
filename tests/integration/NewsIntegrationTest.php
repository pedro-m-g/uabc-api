<?php

use App\Entities\NewsItem;
use App\Models\NewsItemModel;
use CodeIgniter\Test\CIUnitTestCase;
use CodeIgniter\Test\DatabaseTestTrait;
use CodeIgniter\Test\Fabricator;
use CodeIgniter\Test\FeatureTestTrait;

/**
 * @internal
 */
final class NewsIntegrationTest extends CIUnitTestCase
{

    use FeatureTestTrait;
    use DatabaseTestTrait;

    protected $migrate = true;
    protected $migrateOnce = false;
    protected $refresh = true;
    protected $namespace = null;

    const JSON_HEADER = 'application/json; charset=UTF-8';

    public function testIndexWithNoPagination()
    {
        $model = new NewsItemModel();
        $fabricator = new Fabricator($model);
        $news = $fabricator->create(3);

        $result = $this->get('/news');

        $result->assertOK();
        $result->assertHeader('Content-Type', self::JSON_HEADER);
        $result->assertJSONExact([
            'limit' => 0,
            'offset' => 0,
            'data' => NewsItem::collectionToJSONArray($news)
        ]);
    }

    public function testIndexFirstPage()
    {
        $model = new NewsItemModel();
        $fabricator = new Fabricator($model);
        $news = $fabricator->create(9);

        $result = $this->get('/news?limit=3&offset=0');

        $result->assertOK();
        $result->assertHeader('Content-Type', self::JSON_HEADER);
        $result->assertJSONExact([
            'limit' => 3,
            'offset' => 0,
            'data' => array_slice(NewsItem::collectionToJSONArray($news), 0, 3)
        ]);
    }

    public function testIndexSecondPage()
    {
        $model = new NewsItemModel();
        $fabricator = new Fabricator($model);
        $news = $fabricator->create(9);

        $result = $this->get('/news?limit=3&offset=3');

        $result->assertOK();
        $result->assertHeader('Content-Type', self::JSON_HEADER);
        $result->assertJSONExact([
            'limit' => 3,
            'offset' => 3,
            'data' => array_slice(NewsItem::collectionToJSONArray($news), 3, 3)
        ]);
    }

    public function testIndexLastPage()
    {
        $model = new NewsItemModel();
        $fabricator = new Fabricator($model);
        $news = $fabricator->create(9);

        $result = $this->get('/news?limit=3&offset=6');

        $result->assertOK();
        $result->assertHeader('Content-Type', self::JSON_HEADER);
        $result->assertJSONExact([
            'limit' => 3,
            'offset' => 6,
            'data' => array_slice(NewsItem::collectionToJSONArray($news), 6, 3)
        ]);
    }

    public function testUpdateNewsItem()
    {
        $model = new NewsItemModel();
        $fabricator = new Fabricator($model);
        $newsItem = $fabricator->make();
        $newsItem->title = 'Original Title';
        $model->insert($newsItem);

        $newsItem->title = 'New Title';
        $result = $this->withBodyFormat('json')
            ->put("/news/{$newsItem->id}", $newsItem->toJSONArray());

        $result->assertOK();

        $found = $model->find($newsItem->id);
        $this->assertEquals($found->title, 'New Title');
    }

    public function testDeleteNewsItem()
    {
        $model = new NewsItemModel();
        $fabricator = new Fabricator($model);
        $newsItem = $fabricator->create();

        $result = $this->withBodyFormat('json')
            ->delete("/news/{$newsItem->id}");

        $result->assertOK();

        $found = $model->onlyDeleted()->find($newsItem->id);
        $this->assertNotNull($found->deleted_at);
    }
}
