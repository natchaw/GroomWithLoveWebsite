<!-- start Simple Custom CSS and JS -->
<script>
    window.addEventListener('scroll', function (){
        var header = document.querySelector('.CTA'); // < Header class goes here
        var windowPosition = window.scrollY > 500;
                  header.classList.toggle('scrolling-active-cta',windowPosition);
							    if(windowPosition){
										 header.style.padding = '0px 0px'; // < change header height on scroll here
										 } else{
											  header.style.padding = '0px 0px';
										 }
		});
</script>

<!-- end Simple Custom CSS and JS -->
