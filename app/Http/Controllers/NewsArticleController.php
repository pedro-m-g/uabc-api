<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreNewsArticleRequest;
use App\Models\NewsArticle;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class NewsArticleController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $articles = NewsArticle::paginate();
        return Inertia::render('News/Index', [
            'articles' => $articles
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('News/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreNewsArticleRequest $request)
    {
        $articleData = $request->validated();
        NewsArticle::create($articleData);
        return Redirect::route('news.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $article = NewsArticle::findOrFail($id);
        $html = Str::markdown($article->content);
        return Inertia::render('News/Show', [
            'id' => $article->id,
            'title' => $article->title,
            'content' => $html
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $article = NewsArticle::findOrFail($id);
        return Inertia::render('News/Edit', [
            'article' => $article
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreNewsArticleRequest $request, string $id)
    {
        $article = NewsArticle::findOrFail($id);
        $articleData = $request->validated();
        $article->fill($articleData);
        $article->save();
        return Redirect::route('news.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $article = NewsArticle::findOrFail($id);
        $article->delete();
        return Redirect::route('news.index');
    }
}
