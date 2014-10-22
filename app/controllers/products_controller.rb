class ProductsController < ApplicationController

  def index
    @products = Product.all
    # render json: @products
    render json: { message: 'hey' }
  end

  def show
    @product = Product.find_by(id: params[:id])
  end

  def new
    @product = Product.new
  end

  def create
    @product = Product.new(name: params[:name], price: params[:price], available: params[:available])
    if @product.save
      render json: @product, status: :created, location: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  def edit
    @product = Product.find(params[:id])
  end

  def update 
    @product = Product.find(params[:id])
    @product.update(name: params[:name], price: params[:price], available: params[:available])
    # redirect_to root_path
  end
 
end
