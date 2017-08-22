/*global $*/
/*global QUnit*/

'use strict';

var SiteSelectorView = function(controller)
{
    this.controller = controller;
};

SiteSelectorView.prototype.init = function() 
{
    var self = this;
    self.controller.options.$container.html('loading...');
    $(".site-name").html($.cookie('selected_site'));

    $(document).on('click', this.controller.options.button_select, function(evt)
    {
        evt.preventDefault();

        self.renderMenu();
    });

    $(document).on('click', function(evt)
    {
        if (!$(evt.target).is('.site-button-select'))
        {
            self.hideMenu();
        }
    });

    $(document).on('click', '.site-select-button', function(evt)
    {
        evt.preventDefault();
        var id = $(this).attr('site-id');
        self.controller.selectSite(parseInt(id));
        self.render();

        self.controller.onchange(self.controller.selected_site);
    });
};

SiteSelectorView.prototype.render = function() 
{
    var selected = this.controller.getSelectedSite();
    this.controller.options.$container.html(
        selected.name + 
        ' <div class="site-button-select arrow-down"></div>' );
};

SiteSelectorView.prototype.renderMenu = function() 
{
    this.hideMenu();
    var $menu_html = $('.site-selector');
    // this.controller.options.$container.append($menu_html);
    $menu_html.html("");

    var sites = this.controller.getSites();

    for (var i = sites.length - 1; i >= 0; i--) 
    {
        var site = sites[i];

        $menu_html.append('<li>\
                              <a class="site-select-button" site-id="' + site.id + '">' + site.name + '</a>\
                           </li>');

        //$menu_html.append('<div class="site-select-button" site-id="' + site.id + '" >' + site.name + '</div>');
    }
};


SiteSelectorView.prototype.hideMenu = function() 
{
    $('.sites-select-menu').remove();
};

/****** CONTROLLER ******/


var SiteSelector = function($container)
{
    $container = $container === undefined ? '' : $container;

    this.options = {
        url_sites : '/site/list_all',
        button_select : '.site-button-select',
        $container : $container
    };

    this.selected_site = {'name' : 'loading...'};
    this.model = [];

    this.view = new SiteSelectorView(this);
    this.view.init();
};

SiteSelector.prototype.loadSelectedSite = function() 
{
    var cookie = $.cookie('selected_site');
    if (cookie === undefined || cookie === '')
    {
        $.cookie('selected_site', this.model[0].name, { path: '/' });
        cookie = $.cookie('selected_site');
    }

    for (var i = this.model.length - 1; i >= 0; i--) 
    {
        if (cookie === this.model[i].name)
        {
            this.selectSite(this.model[i].id);
        }
    }

    if (this.selected_site === undefined)
    {
        this.selectSite(this.model[0].id);
    }
};

SiteSelector.prototype.loadSites = function(callback) 
{
    var self = this;
    $.get(this.options.url_sites, function(data)
    {
        try
        {
            var json_data = data.sites;
            self.model = json_data;
            self.loadSelectedSite();
            self.view.render();

            callback(json_data);
        }
        catch(ex)
        {
            callback([]);
        }
    });
};


SiteSelector.prototype.getSelectedSite = function() 
{
    return this.selected_site;
};

SiteSelector.prototype.getSites = function() 
{
    return this.model;
};

SiteSelector.prototype.selectSite = function(id) 
{
    for (var i = this.model.length - 1; i >= 0; i--) 
    {
        if (this.model[i].id === id)
        {
            this.selected_site = this.model[i];
            $.cookie('selected_site', this.model[i].name, { path: '/' });
        }
    }
};

SiteSelector.prototype.onchange = function() 
{
    // override this function for event listener
};

$(document).ready(function()
{
    var controller = new SiteSelector($('.site-selector'));
    controller.loadSites($.noop);

    controller.onchange = function()
    {
        try
        {
            if (QUnit === undefined)  // detect if i'm not in test enviroment
            {
                document.location.reload();
            }
        }
        catch(ex)
        {
            document.location.reload();
        }
    };
});