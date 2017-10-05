$(document).ready(function()
{

	class EcommerceView 
	{
		constructor($target)
		{
			this.$target = $target;
			this.template = $('.product').html();
			this.onLoad = $.noop;
		}

		merge(product)
		{
			return this.template.replace('{{ name }}', product.name);
		}

		render(products)
		{
			var string_builder = [];
			for (var i = 0; i < products.length; i++)
			{
				string_builder.push(this.merge(products[i]));
			}
			this.$target.append(string_builder.join(''));
			this.onLoad();
		}
	}

});