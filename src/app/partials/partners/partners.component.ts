import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent {
  logos = [
    { name: 'Google', url: 'https://logo.clearbit.com/google.com', color: '#4285F4' },
    { name: 'Netflix', url: 'https://logo.clearbit.com/netflix.com', color: '#E50914' },
    { name: 'Amazon', url: 'https://logo.clearbit.com/amazon.com', color: '#FF9900' },
    { name: 'Apple', url: 'https://logo.clearbit.com/apple.com', color: '#A2AAAD' },
    { name: 'Spotify', url: 'https://logo.clearbit.com/spotify.com', color: '#1DB954' },
    // Duplicate logos for infinite scroll effect
    { name: 'Google', url: 'https://logo.clearbit.com/google.com', color: '#4285F4' },  
    { name: 'Netflix', url: 'https://logo.clearbit.com/netflix.com', color: '#E50914' },
    { name: 'Amazon', url: 'https://logo.clearbit.com/amazon.com', color: '#FF9900' },
    { name: 'Apple', url: 'https://logo.clearbit.com/apple.com', color: '#A2AAAD' },
    { name: 'Spotify', url: 'https://logo.clearbit.com/spotify.com', color: '#1DB954' },
  ];
}
