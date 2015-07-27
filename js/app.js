$(document).ready( function() {

  function Section(name) {
    this.name = ko.observable(name);
    this.isActive = ko.observable(false);

    this.contents = "";
  }


  function Scanner() {
    this.section = ko.observable();

    this.current_template = ko.computed(function() { 
        console.log( "section = ", this.section() );
        if( this.section() ) { 
            return "tmpl_" + this.section();    
        } else { 
            return "tmpl_signin";
        }
    }, this);

    this.doRemoveSection = function(element) { 
        console.log("remove");
            $(element).slideDown(function() { 
                $(element).remove();
            });
    }

    this.doAddSection = function(element) { 
        console.log("add", element.nodeType);
        
    
    }
  }

  var app = new Scanner();
  ko.applyBindings(app);
  window.app = app;
});
