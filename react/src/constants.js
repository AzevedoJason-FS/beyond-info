const prod = {
    url: {
     API_URL: 'https://crazy-fedora-moth.cyclic.app/newsletter',
     API_URL_GET: 'https://crazy-fedora-moth.cyclic.app/newsletter-total',
    }
    }

const dev = {
    url: {
     API_URL: 'http://localhost:8080/newsletter',
     API_URL_GET: 'http://localhost:8080/newsletter-total',
    }
}

export const config = process.env.NODE_ENV === 'development' ? dev : prod;
   