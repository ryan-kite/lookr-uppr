<template>
  <div id="lookr-uppr">
    <!-- loader -->
    <div class="loading" v-show="isLoading">  
      <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
      <div class="text">Looking up...</div>
    </div>  

    <!-- look up -->
    <div class="hint-text">
      <h4>{{ msg }}</h4>
    </div>
    <div class="text-center mb-5">
      <form>
        <fieldset>
          <input class="phone-input" type="text" v-model="phonePayload" autofocus>
          <button class="input-btn" @click.stop.prevent="fetchLookUp">
            <i class="fas fa-search fa-lg"></i>
          </button>  
        </fieldset>
      </form>
    </div>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeInLeft"
      leave-active-class="animated fadeOutRight">
    <div v-show="isResult"> 
      <div class="indicator">
        <div class="indic1"></div>
        <div class="indic2"></div>
        <div class="indic3"></div>
      </div>
      <div class="results container-fluid">
        <div class="row">
          <div class="col-sm-12">
            <div class="card"> 
              <div class="card-title"> 
                <h4>About phone
                </h4>
              </div>
              <div class="card-content">  
                <div class="result-row">
                  <span class="key">ID</span> 
                  <span class="value">{{dataResponse.id}}</span>
                </div>
                <div class="result-row">
                  <span class="key">Phone</span> 
                  <span class="value">{{dataResponse.phone_number}}</span>
                </div>
                <div class="result-row">
                  <span class="key">Country calling code</span> 
                  <span class="value">{{dataResponse.country_calling_code}}</span>
                </div>
                <div class="result-row">
                  <span class="key">Line type</span> 
                  <span class="value">{{dataResponse.line_type}}</span>
                </div>
                <div class="result-row">
                  <span class="key">Carrier</span> 
                  <span class="value">{{dataResponse.carrier}}</span>
                </div>
                <div class="result-row">
                  <span class="key">Prepaid</span> 
                  <span class="value">{{dataResponse.is_prepaid}}</span>
                </div>
                <div class="result-row">
                  <span class="key im-last">Commercial</span>
                  <span class="value im-last">{{dataResponse.is_commercial}}</span>
                </div>
              </div> 
              <div class="card-footer footer-blurb">
                <div class="">{{ date }}</div>
              </div> 
            </div>  
          </div>
        </div>
        <div class="indicator">
          <div class="indic1"></div>
          <div class="indic2"></div>
          <div class="indic3"></div>
        </div>
        <div class="row">  
          <div class="col-sm-12">
            <div class="card">
              <div class="card-title">
                <h4>Belongs to
                </h4>
              </div>
              <div class="card-content">
                <div class="result-row">
                  <span class="key">ID</span>
                  <span class="value">{{dataResponse.belongs_to[0].id}}</span>
                </div>
                <div class="result-row">
                  <span class="key">Name</span>
                  <span class="value">{{dataResponse.belongs_to[0].name}}</span>
                </div>
                <div class="result-row">
                  <span class="key">First name</span>
                  <span class="value">{{dataResponse.belongs_to[0].firstname}}</span>
                </div>
                <div class="result-row">
                  <span class="key">Last name</span>
                  <span class="value">{{dataResponse.belongs_to[0].lastname}}</span>
                </div>
                <div class="result-row">
                  <span class="key">Type</span> 
                  <span class="value">{{dataResponse.belongs_to[0].type}}</span>
                </div>
                <div class="result-row">
                  <span class="key">Phone start date</span>
                  <span class="value">{{dataResponse.belongs_to[0].link_to_phone_start_date}}</span>
                </div>
                <div class="result-row">
                  <span class="key im-last">Industry</span>
                  <span class="value im-last">{{dataResponse.belongs_to[0].industry}}</span>
                </div>
              </div>
              <div class="card-footer footer-blurb">
                <div class="">{{ date }}</div>
              </div>
            </div>      
          </div>
        </div>
        <div class="indicator">
          <div class="indic1"></div>
          <div class="indic2"></div>
          <div class="indic3"></div>
        </div>
        <div class="row">  
          <div class="col-sm-12">
            <div class="card">
              <div class="card-title">
                <h4>Current address
                </h4>
              </div>
              <div class="card-content">
                <div class="result-row">
                  <span class="key">ID</span> 
                  <span class="value">{{dataResponse.current_addresses[0].id}}</span>
                </div>
                <div class="result-row">
                  <span class="key">Location type</span> 
                  <span class="value">{{dataResponse.current_addresses[0].location_type}}</span>
                </div>
                <div class="result-row">
                  <span class="key">City</span>
                  <span class="value">{{dataResponse.current_addresses[0].city}}</span>
                </div>
                <div class="result-row">
                  <span class="key">Postal code</span> 
                  <span class="value">{{dataResponse.current_addresses[0].postal_code}}</span>
                </div>
                <div class="result-row">
                  <span class="key">State code</span> 
                  <span class="value">{{dataResponse.current_addresses[0].state_code}}</span>
                </div>
                <div class="result-row">
                  <span class="key">Country code</span> 
                  <span class="value">{{dataResponse.current_addresses[0].country_code}}</span>
                </div>
                <div class="result-row">       
                  <span class="key im-last">Location</span> 
                  <span class="value im-last">{{dataResponse.current_addresses[0].lat_long.latitude}}</span>
                </div>
              </div>
              <div class="card-footer footer-blurb">
                <div class="pt-1 float-right">{{ date }}</div>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </div>
    </transition>  

    <div class="text-center pt-4">
      <span class="branding-sm">
        lookr uppr
      </span>
      <div class="pb-5">        
        <div class="pt-2 hint-text">Created by Ryan K </div>
        <div class="pt-2">
          <a href="https://twitter.com/rykite" class="mr-2 links"><i class="fab fa-twitter fa-lg"></i> </a> 
          <a href="https://github.com/ryan-kite/lookr-uppr" class="mr-2 links"><i class="fab fa-github fa-lg"></i> </a>
          <a href="https://www.linkedin.com/in/ryankite/" class="mr-2 links"><i class="fab fa-linkedin-in fa-lg"></i> </a>
          <a href="https://ryan-kite.com/" class="mr-2 links"><i class="fab fa-wordpress fa-lg"></i> </a>
        </div>
      </div>
    </div>
 </div>
</template>

<script>
import axios from 'axios'
import api from '../config.js'
export default {
  name: 'LookrUppr',
  props: {
    msg: String
  },
  data () {
    return {
      isResult: false,
      isLoading: false,
      phonePayload: '',
      dataResponse: {
        id: '',
        phone_number: '',
        is_valid: '',
        country_calling_code: '',
        line_type: '',
        carrier: '',
        is_prepaid: '',
        is_commercial: '',
        belongs_to: [
          {
            id: '',
            name: '',
            firstname: '',
            middlename: '',
            lastname: '',
            alternate_names: [],
            age_range: '',
            gender: '',
            type: '',
            link_to_phone_start_date: '',
            industry: ''
          }
        ],
        current_addresses: [
          {
            id: '',
            location_type: '',
            street_line_1: '',
            street_line_2: '',
            city: '',
            postal_code: '',
            ip4: '',
            state_code: '',
            country_code: '',
            lat_long: {
              latitude: '',
              longitude: '',
              accuracy: ''
            },
            is_active: '',
            delivery_point: '',
            link_to_person_start_date: ''
          }
        ],
        historical_addresses: [],
        associated_people: [],
        alternate_phones: [],
        error: '',
        warnings: []
      }
    }
  },
  computed: {
    date: function () {
      return new Date().toLocaleString()
    }
  },
  methods: {
    fetchLookUp () {
      var app = this
      app.isResult = false
      app.isLoading = true
      axios.get('https://proapi.whitepages.com/3.0/phone.json', {
        params: {
          api_key: api.key,
          phone: app.phonePayload
        }
      })
      .then (function (response) {
        console.log(response)
        if (response.data.id === null) {
          if (response.data.warnings.length > 0) {
            app.$notify({
              title: 'Warning',
              message: response.data.warnings[0],
              type: 'warning'
            })
          } else {
            app.$notify({
              title: 'Warning',
              message: response.data.error.message,
              type: 'warning'
            })
          }
        } else {
          app.dataResponse = response.data
          app.isResult = true
          app.$notify({
          title: 'Success',
          message: 'Result found',
          type: 'success'
        });
        }
      })
      .catch (function (error) {
        console.log(error)
      })
      .finally (function () {
        app.isLoading = false
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
