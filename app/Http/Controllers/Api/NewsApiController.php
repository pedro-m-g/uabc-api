<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\NewsArticle;

class NewsApiController extends Controller
{

    public function getNews()
    {
        return NewsArticle::paginate();
    }

    public function getArticle($id)
    {
        return NewsArticle::findOrFail($id);
    }
}
