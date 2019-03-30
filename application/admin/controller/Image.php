<?php

namespace app\admin\controller;

use app\common\lib\Util;

class Image
{

    public function index()
    {
        try {
            $file = request()->file('file');
            $info = $file->move('../public/static/upload');
            if ($info) {
                $data = [
                    'image' => config('live.host') . "/upload/" . $info->getSaveName(),
                ];
                return Util::show(config('code.success'), 'OK', $data);
            } else {
                return Util::show(config('code.error'), 'error');
            }
        } catch (\Exception $exception) {
            return Util::show(config('code.error'), $exception->getMessage());
        }

    }

}
