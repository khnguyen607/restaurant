<?php

class ProductModel extends BaseModel
{
    const TABLE = 'products';

    public function mAlls($select = ['*'])
    {
        return $this->bmAlls(self::TABLE, $select);
    }

    public function mFind($id)
    {
        return $this->bmFind(self::TABLE, $id);
    }

    public function mInsert($data)
    {
        return $this->bmInsert(self::TABLE, $data);
    }

    public function mUpdate($id, $data)
    {
        return $this->bmUpdate(self::TABLE, $id, $data);
    }

    public function mDelete($id)
    {
        $this->_dependency($id);
        return $this->bmDelete(self::TABLE, $id);
    }

    private function _dependency($productID)
    {

        $this->_query("DELETE FROM `orderdetail` WHERE productID=$productID");
    }
}
