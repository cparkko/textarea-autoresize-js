# textarea-autoresize-js
jQuery plugin <br/>
Plugin can resize textarea field when user type some text <br/>

# options
<strong>width</strong> - width of hidden container, must be equal to textarea width (default: outerWidth) <br/>
<strong>height</strong> - minimum height of hidden container (default: outerHeight)

# methods
<strong>refresh</strong> - update height of textarea

# sample
<code>
<script type="text/javascript" src="/path/to/textarea-autoresize-js.js"></script>
</code>
<br/>
<code>
<script type="text/javascript">
  $('textarea').autoresize({
    width: 400,
    height: 200
  });
</script>
</code>

# sample 2
<code>
$('textarea').autoresize('refresh');
</code>

# example
https://jsfiddle.net/fr03bya0/
