module.exports = { name:"uploadCatalogue",
controller:[ '$http' ,function($http){
	   this.submit = function (catalogue) {
	   		$http.post('/retailer-product/new',catalogue).success((response)=>{
					  console.log('I am in upload catalogue controller');
						console.log(response);
				});
	   }

}]};
