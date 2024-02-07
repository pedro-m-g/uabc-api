<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class AddNews extends Migration
{
  public function up()
  {
    $this->forge->addField([
      'id' => [
        'type' => 'VARCHAR',
        'constraint' => 36
      ],
      'title' => [
        'type' => 'VARCHAR',
        'constraint' => 255
      ],
      'excerpt' => [
        'type' => 'VARCHAR',
        'constraint' => 255
      ],
      'body' => [
        'type' => 'TEXT'
      ],
      'created_at' => [
        'type' => 'TIMESTAMP'
      ],
      'updated_at' => [
        'type' => 'TIMESTAMP',
        'null' => true
      ],
      'deleted_at' => [
        'type' => 'TIMESTAMP',
        'null' => true
      ]
    ]);
    $this->forge->addPrimaryKey('id');
    $this->forge->createTable('news');
  }

  public function down()
  {
    $this->forge->dropTable('news');
  }
}
