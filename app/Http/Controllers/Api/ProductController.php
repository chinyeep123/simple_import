<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Product\StoreImportRequest;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function index()
    {
        return view('visitors.index');
    }

    /**
     * Import resources.
     *
     * @param  StoreImportRequest  $request
     * @param  Visitor  $visitor
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function update(StoreImportRequest $request)
    {
        $this->authorize('update', $visitor);
        $validated = $request->validated();

        $visitor->update($validated);

        return redirect()->route('visitors.index')->with('success', __('Visitor successfully updated'));
    }
}
