import { Routes } from '@angular/router';

import { ErrorComponent } from './Pages/error/error.component';

export const routes: Routes = [
  
    {path: '', redirectTo: 'home', pathMatch: "full"},
    { 
      path: 'home',
      loadComponent:() => import ('./Pages/home/home.component').then(m => m.HomeComponent)
    },
    { 
      path: 'rooms',
      loadComponent:() => import ('./Pages/rooms/rooms.component').then(m => m.RoomsComponent)
  
     },
    { 
      path: 'booking',
      loadComponent:() => import ('./Pages/booking/booking.component').then(m => m.BookingComponent)
     },
    { 
      path: 'hotels',
      loadComponent:() => import ('./Pages/hotels/hotels.component').then(m => m.HotelsComponent)
    },
    { 
        path: 'booking-details/:id',
        loadComponent:() => import ('./Pages/booking/booking-details/booking-details.component').then(m => m.BookingDetailsComponent)
    },
    { 
        path: 'rooms-details/:id',
        loadComponent:() => import ('./Pages/rooms/rooms-details/rooms-details.component').then(m => m.RoomDetailsComponent)
    },
    { 
        path: 'hotels-details/:id',
        loadComponent:() => import ('./Pages/hotels/hotels-details/hotels-details.component').then(m => m.HotelsDetailsComponent)
    },
    {
    path: 'booking',
    loadComponent:() => import ('./Pages/booking/booking.component').then(m => m.BookingComponent)
    },

  
  
  
  
    {path: '**', component: ErrorComponent}
  
  ];
