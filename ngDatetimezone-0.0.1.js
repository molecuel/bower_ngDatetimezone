/**
 * ngDatetimezone - v0.0.1 - 2014-10-27
 * https://github.com/molecuel/ngDatetimezone
 *
 * Copyright (c) 2014 Dominic Böttger
 * Licensed MIT <https://raw.github.com/molecuel/ngDatetimezone/master/LICENSE>
 */
!function(a,b,c){b.module("ngDatetimezone",["ui.bootstrap","ngDatetime-templates-app","ngDatetime-templates-common","ui.select","ngSanitize"]).directive("dateTimeZone",function(){return{scope:{model:"=widgetmodel",defaulttimezone:"=",dateonly:"=",timeonly:"=",notz:"="},restrict:"E",templateUrl:"templates/datetimezone.tpl.html",link:function(a){a.timezones=moment.tz.names(),a.timezone={},a.datemodel={},a.timezone.selected=a.defaulttimezone?a.defaulttimezone:"Europe/Berlin",a.enabled={},a.enabled.time=!0,a.enabled.date=!0,a.enabled.tz=!0,a.dateonly&&(a.enabled.time=!1,a.enabled.date=!0,a.enabled.tz=!0),a.timeonly&&(a.enabled.date=!1,a.enabled.time=!0,a.enabled.tz=!0),a.notz&&(a.enabled.tz=!1),a.$watch("datemodel.day",function(b){if(b){var c=a.tzdate.clone();c.date(b),c.hour(a.datemodel.hour),c.minute(a.datemodel.minute),c.month(a.datemodel.month),c.year(a.datemodel.year),a.tzdate=c}}),a.$watch("datemodel.month",function(b){if(b){var c=b,d=a.tzdate.clone();d.month(c),d.hour(a.datemodel.hour),d.minute(a.datemodel.minute),d.date(a.datemodel.day),d.year(a.datemodel.year),a.tzdate=d}}),a.$watch("datemodel.year",function(b){if(b){var c=a.tzdate.clone();c.year(b),c.hour(a.datemodel.hour),c.minute(a.datemodel.minute),c.date(a.datemodel.day),c.month(a.datemodel.month),a.tzdate=c}}),a.$watch("datemodel.hour",function(b){if(b!==c){var d=b,e=a.tzdate.clone();e.hour(d),e.minute(a.datemodel.minute),e.date(a.datemodel.day),e.month(a.datemodel.month),e.year(a.datemodel.year),a.tzdate=e}}),a.$watch("datemodel.minute",function(b){if(b!==c){var d=a.tzdate.clone();d.minute(b),d.hour(a.datemodel.hour),d.date(a.datemodel.day),d.month(a.datemodel.month),d.year(a.datemodel.year),a.tzdate=d}}),a.$watch("timezone.selected",function(b){if(b&&a.tzdate){var c=a.tzdate.clone();c.tz(b),c.hour(a.datemodel.hour),c.minute(a.datemodel.minute),c.date(a.datemodel.day),c.month(a.datemodel.month),c.year(a.datemodel.year),a.tzdate=c}}),a.$watch("tzdate",function(b){b!==c&&b&&b.toString()&&(a.initial&&(a.datemodel.hour=b.hour(),a.datemodel.minute=b.minute(),a.datemodel.day=b.date(),a.datemodel.month=b.month(),a.datemodel.year=b.year(),a.initial=!1),a.model&&(a.model=new Date(b.toISOString())))}),a.$watch("model",function(b){if(!a.tzdate){a.initial=!0;var c;c=moment(b?b:new Date),a.timezone&&a.timezone.selected?a.tzdate=c.tz(a.timezone.selected):a.defaulttimezone&&(a.tzdate=c.tz(a.defaulttimezone))}})}}}),b.module("ngDatetime-templates-app",["templates/datetimezone.tpl.html"]),b.module("templates/datetimezone.tpl.html",[]).run(["$templateCache",function(a){a.put("templates/datetimezone.tpl.html",'<div class="row">\n  <div ng-if="enabled.date" class="col-xs-5" style="margin-top: 35px;">\n      <div class="form-inline">\n        <div class="form-group">\n          <label>Day</label>\n          <input type="number" min="1" max="31" class="form-control" ng-model="datemodel.day" ng-required="true" style="width: 60px;"/>\n        </div>\n        <div class="form-group">\n            <label>Month</label>\n            <input type="number" min="1" max="12" class="form-control" ng-model="datemodel.month" ng-required="true" style="width: 60px;"/>\n          </div>\n          <div class="form-group">\n            <label>Year</label>\n            <input type="number" min="1900" max="2200"class="form-control" ng-model="datemodel.year" ng-required="true" style="width: 75px;"/>\n          </div>\n    </div>\n  </div>\n  <div ng-if="enabled.time" class="col-xs-3" style="margin-top: 35px;">\n    <div class="form-inline">\n      <div class="form-group">\n        <label>Hour</label>\n        <input type="number" min="0" max="24" class="form-control" ng-model="datemodel.hour" ng-required="true" style="width: 60px;"/>\n      </div>\n      <div class="form-group">\n          <label>Minute</label>\n          <input type="number" min="0" max="59" class="form-control" ng-model="datemodel.minute" ng-required="true" style="width: 60px;"/>\n        </div>\n      </div>\n  </div>\n  <div ng-if="enabled.tz" class="col-xs-4" style="margin-top: 35px;">\n    <ui-select ng-model="timezone.selected" theme="select2" ng-disabled="disabled">\n      <ui-select-match placeholder="Select timezone">{{$select.selected}}</ui-select-match>\n      <ui-select-choices repeat="timezone in timezones | filter: $select.search">\n        <div ng-bind-html="timezone | highlight: $select.search"></div>\n      </ui-select-choices>\n    </ui-select>\n  </div>\n</div>\n')}]),b.module("ngDatetime-templates-common",[])}(window,window.angular);