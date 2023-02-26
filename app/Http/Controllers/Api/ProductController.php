<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Product\StoreImportRequest;
use App\Http\Resources\API\Product\CollectionResource;
use App\Imports\ImportProduct;
use App\Models\ProductDetail;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function index()
    {
        $product = ProductDetail::with(['product.typeBrand', 'product.type', 'product.brandModel', 'product.modelCapacity'])->paginate(config('setting.limit'));

        return new CollectionResource($product);
    }

    /**
     * Import resources.
     *
     * @param  StoreImportRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function storeImport(StoreImportRequest $request)
    {
        Excel::import(new ImportProduct(), $request->file);

        return response()->json([
            'success' => true,
            'message' => 'Import success!'
        ]);
    }

    public function downloadTemplate()
    {
        $filename = 'product.xlsx';
        // Get path from storage directory
        $path = public_path('sample/' . $filename);

        // Download file with custom headers
        return response()->download($path, $filename, [
            'Content-Type' => 'application/vnd.ms-excel',
            'Content-Disposition' => 'inline; filename="' . $filename . '"'
        ]);
    }
}
