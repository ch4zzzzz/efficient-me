// baseUrl

let baseUrl = ''; 
let routerMode = 'history';
let imgBaseUrl = '';


if (process.env.NODE_ENV == 'development') {
  imgBaseUrl = '';
}

else if(process.env.NODE_ENV == 'production'){
	baseUrl = '';
  imgBaseUrl = '';
}

export {
	baseUrl,
	routerMode,
	imgBaseUrl,
}
