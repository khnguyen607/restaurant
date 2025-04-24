<?php

class BookingController extends BaseController
{
    private $model;

    public function __construct()
    {
        $this->loadModel('BookingModel');
        $this->model = new BookingModel;
    }

    public function index()
    {
        $data = $this->model->mAlls();

        // Trả về dữ liệu dưới dạng JSON
        header('Content-Type: application/json');
        echo json_encode($data);
    }

    public function find()
    {
        $id = $_GET['id'];
        $data = $this->model->mFind($id);
        // Trả về dữ liệu dưới dạng JSON
        header('Content-Type: application/json');
        echo json_encode($data);
    }

    public function insert()
    {
        $data = [
            'Date'      => $_POST['date'],
            'GuestName'      => $_POST['guestName'],
            'GuestEmail'      => $_POST['guestEmail'],
            'GuestPhone'      => $_POST['guestPhone'],
            'Count'      => $_POST['count'],
            'Note'      => $_POST['note'],
        ];
        $this->model->mInsert($data);
        echo "true";
    }

    public function update()
    {
        $id = $_GET['id'];
        $data = [
            'GuestName'      => $_POST['guestName'],
            'GuestEmail'      => $_POST['guestEmail'],
            'GuestPhone'      => $_POST['guestPhone'],
        ];

        $this->model->mUpdate($id, $data);

        echo "true";
    }

    public function delete()
    {
        $id = $_GET['id'];
        $this->model->mDelete($id);
        echo "true";
    }
}
