<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Entities\NewsItem;
use App\Models\NewsItemModel;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\I18n\Time;

class NewsController extends BaseController
{

    private NewsItemModel $newsItemModel;

    public function __construct()
    {
        $this->newsItemModel = new NewsItemModel();
    }

    public function index(): ResponseInterface
    {
        $data = $this->request->getGet();
        $limit = array_key_exists('limit', $data)
            ? intval($data['limit'])
            : 0;
        $offset = array_key_exists('offset', $data)
            ? intval($data['offset'])
            : 0;

        $news = $this->newsItemModel->findAll($limit, $offset);

        return $this->response->setStatusCode(200)->setJSON([
            'limit' => $limit,
            'offset' => $offset,
            'data' => array_map(function ($newsItem) {
                return $newsItem->toJSONArray();
            }, $news)
        ]);
    }

    public function create(): ResponseInterface
    {
        $data = $this->request->getJSON(true);
        $newsItem = new NewsItem();
        $newsItem->fill($data);
        $this->newsItemModel->insert($newsItem);
        return $this->response->setStatusCode(200)
            ->setJSON($newsItem->toJSONArray());
    }

    public function update(string $id): ResponseInterface
    {
        $data = $this->request->getJSON(true);
        $newsItem = $this->newsItemModel->find($id);
        $newsItem->fill($data);
        $this->newsItemModel->update($id, $newsItem);
        return $this->response->setStatusCode(200)
            ->setJSON($newsItem->toJSONArray());
    }

    public function delete(string $id): ResponseInterface
    {
        $newsItem = $this->newsItemModel->find($id);
        $this->newsItemModel->delete($id);
        $newsItem->deleted_at = Time::now();
        return $this->response->setStatusCode(200)
            ->setJSON($newsItem->toJSONArray());
    }
}
