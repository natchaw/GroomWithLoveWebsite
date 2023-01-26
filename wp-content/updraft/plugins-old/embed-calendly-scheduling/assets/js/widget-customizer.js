const startCustomizingButton=document.querySelector('button[name="emcs-choose-customizer"]'),customizerHomeButton=document.querySelectorAll('button[name="emcs-customizer-home"]'),chooseCustomizerSelect=document.querySelector('select[name="emcs-choose-customizer-select"]'),chooseEmbedTypeSelect=document.querySelectorAll('select[name="emcs-customizer-embed-type"]'),chooseCustomizerForm=document.querySelector(".emcs-choose-customizer-form"),inlineFormCustomizerForm=document.querySelector(".emcs-inline-form-customizer-form"),popupTextCustomizerForm=document.querySelector(".emcs-popup-text-customizer-form"),popupButtonCustomizerForm=document.querySelector(".emcs-popup-button-customizer-form"),formHeight=document.querySelector('input[name="emcs-embed-form-height"]'),formWidth=document.querySelector('input[name="emcs-embed-form-width"]'),embedText=document.querySelectorAll('input[name="emcs-embed-text"]'),embedTextSize=document.querySelectorAll('input[name="emcs-embed-text-size"]'),embedTextColor=document.querySelectorAll('input[name="emcs-embed-text-color"]'),embedButtonStyle=document.querySelector('select[name="emcs-embed-button-style"]'),embedButtonSize=document.querySelector('select[name="emcs-embed-button-size"]'),embedButtonBackground=document.querySelector('input[name="emcs-embed-button-background"]'),cookieBanner=document.querySelectorAll('select[name="emcs-cookie-banner"]');calendlyUrl="https://calendly.com/"+chooseCustomizerForm.id+"/";let eventSlug="";const URLString=window.location.href,url=new URL(URLString),slug=url.searchParams.get("event_type");if(null!==slug&&isNaN(parseInt(slug))&&(eventSlug=calendlyUrl+slug.toString().toLowerCase().trim(),showInlineFormCustomizer()),null!==chooseCustomizerForm){function showDefaultCustomizer(e){e.preventDefault(),showInlineFormCustomizer()}startCustomizingButton.addEventListener("click",showDefaultCustomizer)}function changeEmbedType(){switch(this.value){case"emcs-inline-text":return showInlineFormCustomizer();case"emcs-popup-text":return showPopupTextFormCustomizer();case"emcs-popup-button":return showPopupButtonFormCustomizer();default:return showInlineFormCustomizer()}}function showInlineFormCustomizer(){let e=prepareEmbedCustomizerOptions(1);hideAllEmbedCustomizersExcept(inlineFormCustomizerForm),resetEmbedTypeSelector(inlineFormCustomizerForm,0),updateGeneratedShortcode(e,inlineFormCustomizerForm)}function showPopupTextFormCustomizer(){let e=prepareEmbedCustomizerOptions(2);hideAllEmbedCustomizersExcept(popupTextCustomizerForm),resetEmbedTypeSelector(popupTextCustomizerForm,1),updateEmbedCustomizerPreviewDiv(e,popupTextCustomizerForm),updateGeneratedShortcode(e,popupTextCustomizerForm)}function showPopupButtonFormCustomizer(){let e=prepareEmbedCustomizerOptions(3);hideAllEmbedCustomizersExcept(popupButtonCustomizerForm),resetEmbedTypeSelector(popupButtonCustomizerForm,2),updateEmbedCustomizerPreviewDiv(e,popupButtonCustomizerForm),updateGeneratedShortcode(e,popupButtonCustomizerForm)}function resetEmbedTypeSelector(e,t){e.querySelector('select[name="emcs-customizer-embed-type"]').selectedIndex=t}function hideAllEmbedCustomizersExcept(e=""){""!==e&&(null!==chooseCustomizerForm&&(chooseCustomizerForm.style.display="none"),inlineFormCustomizerForm.style.display="none",popupTextCustomizerForm.style.display="none",popupButtonCustomizerForm.style.display="none",e.style.display="block")}function updateInlineEmbedCustomizer(){updateEmbedCustomizerPreview(1,inlineFormCustomizerForm)}function updatePopupTextCustomizer(){updateEmbedCustomizerPreview(2,popupTextCustomizerForm),updateEmbedCustomizerPreview(3,popupButtonCustomizerForm)}function updatePopupButtonCustomizer(){updateEmbedCustomizerPreview(3,popupButtonCustomizerForm)}function updateEmbedCustomizerPreview(e=1,t=""){let o=prepareEmbedCustomizerOptions(e);2!=e&&3!=e||updateEmbedCustomizerPreviewDiv(o,t),updateGeneratedShortcode(o,t)}function updateEmbedCustomizerPreviewDiv(e,t){let o=t.querySelector(".emcs-customizer-preview .emcs-preview-content .emcs-preview");updatePopupTextCustomizerPreviewDiv(o,e),updatePopupButtonCustomizerPreviewDiv(o,e)}function updatePopupTextCustomizerPreviewDiv(e,t){e.innerHTML=t.text,e.style.color=t.text_color,t.text_size>=10&&t.text_size<=30&&(e.style.fontSize=t.text_size+"px")}function updatePopupButtonCustomizerPreviewDiv(e,t){switch(t.button_size){case 1:e.style.padding="10px";break;case 2:e.style.padding="15px";break;default:e.style.padding="20px"}e.style.backgroundColor=t.button_color}function updateGeneratedShortcode(e,t){let o=t.querySelector('input[name="emcs-embed-customizer-shortcode"]');if(o.style.display="none",""==e&&void 0!==e)o.style.display="block",o.value=generateShortcode(getDefaultShortcodeOptionString());else{o.style.display="block";let t="";for(let o in e)t+=`${o}="${e[o]}" `;let r=`${getDefaultShortcodeOptionString()} ${t}`;o.value=generateShortcode(r)}}function generateShortcode(e){return`[calendly ${e.trim()}]`}function getDefaultShortcodeOptionString(){return""==eventSlug?`url="${calendlyUrl+chooseCustomizerSelect.value}"`:`url="${eventSlug}"`}function prepareEmbedCustomizerOptions(e=1){let t={type:1,form_height:formHeight.value,form_width:formWidth.value,hide_cookie_banner:inlineFormCustomizerForm.querySelector('select[name="emcs-cookie-banner"]').selectedIndex},o={type:3,text:popupTextCustomizerForm.querySelector('input[name="emcs-embed-text"]').value,text_color:popupTextCustomizerForm.querySelector('input[name="emcs-embed-text-color"]').value,text_size:popupTextCustomizerForm.querySelector('input[name="emcs-embed-text-size"]').value,hide_cookie_banner:popupTextCustomizerForm.querySelector('select[name="emcs-cookie-banner"]').selectedIndex},r={type:2,text:popupButtonCustomizerForm.querySelector('input[name="emcs-embed-text"]').value,text_color:popupButtonCustomizerForm.querySelector('input[name="emcs-embed-text-color"]').value,text_size:popupButtonCustomizerForm.querySelector('input[name="emcs-embed-text-size"]').value,button_style:getPopupButtonProperties().style,button_size:getPopupButtonProperties().size,button_color:getPopupButtonProperties().background,hide_cookie_banner:popupButtonCustomizerForm.querySelector('select[name="emcs-cookie-banner"]').selectedIndex};switch(e){case 1:return t;case 2:return o;case 3:return r;default:return t}}function getPopupButtonProperties(){let e={};switch("emcs-embed-button-float"==popupButtonCustomizerForm.querySelector('select[name="emcs-embed-button-style"]').value?e.style=2:e.style=1,popupButtonCustomizerForm.querySelector('select[name="emcs-embed-button-size"]').value){case"emcs-embed-button-small":e.size=1;break;case"emcs-embed-button-medium":e.size=2;break;default:e.size=3}return e.background=popupButtonCustomizerForm.querySelector('input[name="emcs-embed-button-background"]').value,e}function showChooseCustomizerForm(){hideAllEmbedCustomizersExcept(chooseCustomizerForm)}chooseEmbedTypeSelect.forEach(e=>{e.addEventListener("input",changeEmbedType)}),formHeight.addEventListener("input",updateInlineEmbedCustomizer),formWidth.addEventListener("input",updateInlineEmbedCustomizer),cookieBanner.forEach(e=>{e.addEventListener("change",updateInlineEmbedCustomizer),e.addEventListener("change",updatePopupTextCustomizer)}),embedText.forEach(e=>{e.addEventListener("input",updatePopupTextCustomizer)}),embedTextSize.forEach(e=>{e.addEventListener("input",updatePopupTextCustomizer)}),embedTextColor.forEach(e=>{e.addEventListener("input",updatePopupTextCustomizer)}),embedButtonStyle.addEventListener("change",updatePopupButtonCustomizer),embedButtonSize.addEventListener("change",updatePopupButtonCustomizer),embedButtonBackground.addEventListener("input",updatePopupButtonCustomizer),customizerHomeButton.forEach(e=>{e.addEventListener("click",showChooseCustomizerForm)});