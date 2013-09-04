this["GeotriggerEditor"] = this["GeotriggerEditor"] || {};
this["GeotriggerEditor"]["Templates"] = this["GeotriggerEditor"]["Templates"] || {};

this["GeotriggerEditor"]["Templates"]["controls"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<a href=\"#\" class=\"gt-tool gt-tool-list active gt-tooltip\"><span>List</span></a>\n<a href=\"#\" class=\"gt-tool gt-tool-create gt-tooltip\"><span>Create</span></a>\n\n<div class=\"gt-draw-tools\">\n  <a href=\"#\" class=\"gt-tool gt-tool-polygon gt-tooltip\"><span>Polygon</span></a>\n  <a href=\"#\" class=\"gt-tool gt-tool-radius gt-tooltip\"><span>Radius</span></a>\n  <!-- <a href=\"#\" class=\"gt-tool gt-tool-drivetime gt-tooltip\"><span>Drivetime</span></a> -->\n</div>";
  });

this["GeotriggerEditor"]["Templates"]["drawer-list"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"gt-panel gt-panel-list\">\n  <!-- templates/list.hbs -->\n</div>\n\n<div class=\"gt-panel gt-panel-edit\">\n  <!-- templates/edit.hbs -->\n</div>";
  });

this["GeotriggerEditor"]["Templates"]["drawer-new"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"gt-panel gt-panel-new\">\n  <!-- templates/new.hbs -->\n</div>";
  });

this["GeotriggerEditor"]["Templates"]["edit"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  return "\n        <option value='enter'>enters</option>\n        <option value='leave'>leaves</option>\n        ";
  }

function program3(depth0,data) {
  
  
  return "\n        <option value='fine'>fine</option>\n        <option value='adaptive'>adaptive</option>\n        <option value='rough'>rough</option>\n        <option value='off'>off</option>\n        ";
  }

  buffer += "<div class='gt-panel-top-bar'>\n  <a href='#' class='gt-panel-top-bar-button gt-back-to-list'></a>\n  <h3>Edit</h3>\n  <a href='#' class='gt-panel-top-bar-button gt-close-drawer'></a>\n</div>\n\n<div class='gt-panel-content'>\n  <form>\n    <input type='text' name='properties[title]' placeholder='Title' class='gt-trigger-title-input' value='"
    + escapeExpression(((stack1 = ((stack1 = depth0.properties),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>\n    <span class='gt-tag-label'>When a device tagged</span>\n    <input type='text' name='tags' placeholder='enter tags' class='gt-tag-input' value='";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.tagList || depth0.tagList),stack1 ? stack1.call(depth0, depth0.tags, options) : helperMissing.call(depth0, "tagList", depth0.tags, options)))
    + "'>\n\n    <label for='event' class='left'>\n      <select name='condition[direction]' class='gt-event'>\n        <option disabled='disabled'>select a condition</option>\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.select || depth0.select),stack1 ? stack1.call(depth0, ((stack1 = depth0.condition),stack1 == null || stack1 === false ? stack1 : stack1.direction), options) : helperMissing.call(depth0, "select", ((stack1 = depth0.condition),stack1 == null || stack1 === false ? stack1 : stack1.direction), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n      </select>\n      <select name='geometry-type' class='gt-geometry-type'>\n        <option value='default' disabled='disabled' selected>select a geometry</option>\n        <option value='polygon'>a polygon</option>\n        <option value='radius'>a distance of</option>\n      </select>\n    </label>\n\n    <select name='action-selector' class='gt-action'>\n      <option disabled='disabled' selected>choose an action</option>\n      <option value='message'>send the device a message</option>\n      <option value='callback'>post to a server</option>\n      <option value='profile'>change tracking profile</option>\n    </select>\n    <span>:</span>\n\n    <label class='gt-action gt-action-message' for='message'>\n      <textarea class='gt-action-message-box' name='action[notification][text]' placeholder='message'>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.action),stack1 == null || stack1 === false ? stack1 : stack1.notification)),stack1 == null || stack1 === false ? stack1 : stack1.text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</textarea>\n    </label>\n\n    <label class='gt-action gt-action-callback gt-hide' for='url'>\n      <input type='text' name='action[callbackUrl]' placeholder='url (optional)'>\n    </label>\n\n    <label class='gt-action gt-action-profile gt-hide' for='url'>\n      <span>to</span>\n      <select class='gt-action-profile-selector' name='action[trackingProfile]'>\n        <option disabled='disabled'>choose a tracking profile</option>\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  stack2 = ((stack1 = helpers.select || depth0.select),stack1 ? stack1.call(depth0, ((stack1 = depth0.action),stack1 == null || stack1 === false ? stack1 : stack1.trackingProfile), options) : helperMissing.call(depth0, "select", ((stack1 = depth0.action),stack1 == null || stack1 === false ? stack1 : stack1.trackingProfile), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n      </select>\n    </label>\n\n    <a href='#' class='gt-button gt-button-blue gt-submit'>Update</a>\n  </form>\n</div>";
  return buffer;
  });

this["GeotriggerEditor"]["Templates"]["empty"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"gt-panel-top-bar\">\n  <a href=\"#\" class=\"gt-panel-top-bar-button gt-new-trigger\"></a>\n  <h3>No Geotriggers</h3>\n  <a href=\"#\" class=\"gt-panel-top-bar-button gt-close-drawer\"></a>\n</div>\n\n<div class=\"gt-panel-no-triggers\">\n  <h5>This application doesn't have any Geotriggers yet.</h5>\n   <a href=\"#\" class=\"gt-tool gt-tool-create gt-button gt-button-green\">Create A New Trigger</a>\n</div>\n\n<ul class=\"gt-tool-descriptions\">\n  <li class=\"gt-tool-description\">\n    <span class=\"gt-icon gt-icon-create\"></span>\n    <h5><a class=\"gt-tool gt-tool-create\"href=\"#\">New Geotrigger Tool</a></h5>\n    <p>Create a new Geotrigger by first entering it's information, than defining an area on the map.</p>\n  </li>\n\n  <li class=\"gt-tool-description\">\n    <span class=\"gt-icon gt-icon-polygon\"></span>\n    <h5><a class=\"gt-tool gt-tool-polygon\"href=\"#\">Polygon Tool</a></h5>\n    <p>Click to start drawing on the map, creating each point of a polygon. Click on the first point to close the shape and enter the Geotrigger information.</p>\n  </li>\n\n  <li class=\"gt-tool-description\">\n    <span class=\"gt-icon gt-icon-radius\"></span>\n    <h5><a class=\"gt-tool gt-tool-radius\"href=\"#\">Radius Tool</a></h5>\n    <p>Select a point on the map, than hold and drag to define a radius around that point. You can edit this radius later, if you want.</p>\n  </li>\n\n  <!-- <li class=\"gt-tool-description\">\n    <span class=\"gt-icon gt-icon-drivetime\"></span>\n    <h5><a class=\"gt-tool gt-tool-drivetime\"href=\"#\">Drivetime Tool</a></h5>\n    <p>Drop a marker on the map, and then enter your desired drive time from that marker. We'll compute that polygon for you.</p>\n  </li> -->\n</ul>\n\n";
  });

this["GeotriggerEditor"]["Templates"]["item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\n    untitled trigger\n    ";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    "
    + escapeExpression(((stack1 = ((stack1 = depth0.properties),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n    ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n  ";
  options = {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data};
  stack2 = ((stack1 = helpers.unlessDefaultTag || depth0.unlessDefaultTag),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "unlessDefaultTag", depth0, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "";
  buffer += "\n  <li>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</li>\n  ";
  return buffer;
  }

  buffer += "<span class=\"gt-item-edit gt-icon ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.actionIcon || depth0.actionIcon),stack1 ? stack1.call(depth0, ((stack1 = depth0.condition),stack1 == null || stack1 === false ? stack1 : stack1.direction), options) : helperMissing.call(depth0, "actionIcon", ((stack1 = depth0.condition),stack1 == null || stack1 === false ? stack1 : stack1.direction), options)))
    + " gt-icon-polygon\"></span>\n<h5>\n  <a class=\"gt-item-edit\" href=\"#\">\n    ";
  stack2 = helpers.unless.call(depth0, ((stack1 = depth0.properties),stack1 == null || stack1 === false ? stack1 : stack1.title), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  </a>\n</h5>\n<ul class=\"gt-tags\">\n  ";
  stack2 = helpers.each.call(depth0, depth0.tags, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</ul>\n<ul class=\"gt-item-controls\">\n	<li><a class=\"gt-reset-delete\" href=\"#\">&#x2716;</a></li>\n	<li><a class=\"gt-item-delete gt-button-small\" href=\"#\"></a></li>\n</ul>";
  return buffer;
  });

this["GeotriggerEditor"]["Templates"]["list"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"gt-list-header gt-hide\">\n  <div class=\"gt-panel-top-bar\">\n    <h3 class=\"gt-panel-top-bar-left\">List</h3>\n    <a href=\"#\" class=\"gt-panel-top-bar-button gt-close-drawer\"></a>\n  </div>\n  <div class=\"gt-search\">\n    <input type=\"search\"></input>\n  </div>\n</div>\n<ul class=\"gt-results\"></ul>";
  });

this["GeotriggerEditor"]["Templates"]["main"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"gt-controls-region\"></div>\n<div id=\"gt-drawer-list\" class=\"gt-drawer\"></div>\n<div id=\"gt-drawer-new\" class=\"gt-drawer\"></div>\n<div id=\"gt-map-region\"></div>\n<div id=\"gt-notifications\"></div>";
  });

this["GeotriggerEditor"]["Templates"]["new"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class='gt-panel-top-bar'>\n  <h3 class='gt-panel-top-bar-left'>Create</h3>\n  <a href='#' class='gt-panel-top-bar-button gt-close-drawer'></a>\n</div>\n\n<div class='gt-panel-content'>\n  <form>\n    <input type='text' name='properties[title]' placeholder='Title' class='gt-trigger-title-input'>\n    <span class='gt-tag-label'>When a device tagged</span>\n    <input type='text' name='setTags' placeholder='enter tags' class='gt-tag-input'>\n\n    <label for='event' class='left'>\n      <select name='condition[direction]' class='gt-event'>\n        <option disabled='disabled' selected>select a condition</option>\n        <option value='enter'>enters</option>\n        <option value='leave'>leaves</option>\n      </select>\n      <select name='geometry-type' class='gt-geometry-type'>\n        <option value='default' disabled='disabled' selected>select a geometry</option>\n        <option value='polygon'>a polygon</option>\n        <option value='radius'>a distance of</option>\n      </select>\n    </label>\n\n    <select class='gt-action-selector'>\n      <option disabled='disabled' selected>choose an action</option>\n      <option value='message'>send the device a message</option>\n      <option value='callback'>post to a server</option>\n      <option value='profile'>change tracking profile</option>\n    </select>\n    <span>:</span>\n\n    <label class='gt-action gt-action-message' for='message'>\n      <textarea class='gt-action-message-box' name='action[notification][text]' placeholder='message'></textarea>\n    </label>\n\n    <label class='gt-action gt-action-callback gt-hide' for='url'>\n      <input type='text' name='action[callbackUrl]' placeholder='url (optional)'>\n    </label>\n\n    <label class='gt-action gt-action-profile gt-hide' for='url'>\n      <span>to</span>\n      <select class='gt-action-profile-selector' name='action[trackingProfile]'>\n        <option disabled='disabled' selected>choose a tracking profile</option>\n        <option value='fine'>fine</option>\n        <option value='adaptive'>adaptive</option>\n        <option value='rough'>rough</option>\n        <option value='off'>off</option>\n      </select>\n    </label>\n\n    <!--\n    <label for='date'>\n      This will start\n      <select class='gt-date-start'>\n        <option value='now'>now</option>\n        <option value='future'>in the future</option>\n      </select>\n      and persist\n      <select class='gt-date-end'>\n        <option value='never'>indefinitely</option>\n        <option value='future'>until a future date</option>\n      </select>\n    </label>\n    -->\n\n    <a href='#' class='gt-button gt-button-blue gt-submit'>Submit</a>\n  </form>\n</div>";
  });

this["GeotriggerEditor"]["Templates"]["notification"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<button class=\"gt-close\">&times;</button> ";
  if (stack1 = helpers.message) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.message; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  return buffer;
  });