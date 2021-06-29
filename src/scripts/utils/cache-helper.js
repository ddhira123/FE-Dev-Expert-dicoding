const CacheHelper = {
	// async cachingAppShell(requests) {
   
	// },
   
	// async deleteOldCache() {
   
	// },
   
	// async revalidateCache(request) {
   
	// },
   
	async _openCache() {
		return caches.open('MovieCatalogue-V1');
	},
};
   
export default CacheHelper;