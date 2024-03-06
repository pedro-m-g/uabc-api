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
            'createdAt' => $this->formatDate($this->created_at),
            'updatedAt' => $this->formatDate($this->updated_at),
            'deletedAt' => $this->formatDate($this->deleted_at)
        ];
    }

    public static function collectionToJSONArray($array)
    {
        return array_map(function ($item) {
            return $item->toJSONArray();
        }, $array);
    }

    private function formatDate($date)
    {
        if ($date == null) {
            return null;
        }
        return $date->toDateString() . 'T' . $date->toTimeString() . 'Z';
    }
}
