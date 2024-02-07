<?php

namespace App\Entities;

use CodeIgniter\Entity\Entity;

class NewsItem extends Entity
{

    protected $datamap = [];
    protected $dates   = ['created_at', 'updated_at', 'deleted_at'];
    protected $casts   = [];

    public function toJSONArray()
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'excerpt' => $this->excerpt,
            'body' => $this->body,
            'created_at' => $this->created_at->toDateTimeString(),
            'updated_at' => $this->updated_at->toDateTimeString(),
            'deleted_at' => $this->deleted_at?->toDateTimeString()
        ];
    }
}
