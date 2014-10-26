class ProductsController < ApplicationController

  def index
    @products = Product.all
    render json: @products
  end

  def show
    @product = Product.find_by(id: params[:id])
  end

  def new
    @product = Product.new
  end

  def create
    @product = Product.new(name: params[:name], price: params[:price], description: params[:description], available: params[:available])
    if @product.save
      render json: @product, status: :created, location: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  def edit
    @product = Product.find_by(params[:name])
  end

  def update 
    @product = Product.find(params[:id])
    @product.update(name: params[:name], price: params[:price],  description: params[:description], available: params[:available])
    render json: @product, status: :accepted
  end
 
end
