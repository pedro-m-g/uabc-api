<?php

namespace App\Entities;

use CodeIgniter\Entity\Entity;
use CodeIgniter\I18n\Time;

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
            'createdAt' => intval($this->created_at->format('U')),
            'updatedAt' => intval($this->updated_at->format('U')),
            'deletedAt' => intval($this->deleted_at?->format('U'))
        ];
    }

    public static function collectionToJSONArray($array)
    {
        return array_map(function ($item) {
            return $item->toJSONArray();
        }, $array);
    }
}
