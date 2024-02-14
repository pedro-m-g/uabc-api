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
            'createdAt' => $this->created_at->toDateTimeString(),
            'updatedAt' => $this->updated_at->toDateTimeString(),
            'deletedAt' => $this->deleted_at?->toDateTimeString()
        ];
    }
}
