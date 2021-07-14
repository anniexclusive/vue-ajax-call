new Vue({
  el: '#app',

  data : {
    guest_name: '',
    phone : '',
    email : '',
    guests : [],
    errors : {}
  },

  methods: {

    onSubmit() {
      axios.post('/api/guests', {
        'guest_name' : this.guest_name,
        'phone' : this.phone,
        'email' : this.email
      })
      .then(response => console.log(response))
      .catch(error => this.errors = error.response.data);
      axios.get('/api/guests').then(response => this.guests = response.data);
    }
  },

  mounted() {
      axios.get('/api/guests').then(response => this.guests = response.data);
  }
});