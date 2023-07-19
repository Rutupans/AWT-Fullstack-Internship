$("#formvalidation").validate({
    rules:{
        name:{
            minlength: 2
        },
        email:{
            email:true
        },
        phone:{
            number:true,
            minlength: 10,
            maxlength:10
        }
    },
    message:{
        name:{
            required:"Please enter yor name",
            minlenght:"Name atleast 2 characters"
        },
        email:"Please enter yor email",
        phone:"Please enter yor Phone",
        subject:"Please enter yor subject",
        formMessage:"Please enter yor Phone"
    },

    submitHandler: function(form) {
      form.submit();
    }
   });