

<div v-if="errors" class="alert alert-danger" style="position: absolute;z-index: 10; top: 40px; right: 20px; color: #b93535;">
	
                              <div v-for="(v, k) in errors" :key="k">
                                <p v-for="error in v" :key="error" class="text-sm">
                                  @{{ error }}
                                </p>
                              </div>
                            </div>