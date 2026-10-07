import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CurrencyPipe, DatePipe } from '@angular/common';

export interface MenuItem {
  name: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CurrencyPipe, DatePipe],
  template: `
    <div class="header">
      <h1><span>Pizza</span><span>Planet</span></h1>
    </div>

    <div class="main">
      <div class="container">
        <h1>Specials for {{ today | date }}</h1>
      </div>
    </div>

    <h2>Appetizers</h2>
    <div class="appetizers row">
      @for (item of appetizers(); track item.name; let i = $index) {
        <div class="item col-md-9">
          <h3 class="name">{{ item.name }}</h3>
          <p class="description">{{ item.description }}</p>
        </div>
        <div class="price col-md-3">
          <p class="price">{{ item.price | currency:'ZAR':'symbol':'1.2-2' }}</p>
        </div>
      }
    </div>

    <h2>Mains</h2>
    <div class="mains row">
    @for (item of mains(); track item.name; let i = $index) {
      <div class="item col-md-9">
        <h3 class="name">{{ item.name }}</h3>
        <p class="description">{{ item.description }}</p>
      </div>
      <div class="price col-md-3">
        <p class="price">{{ item.price | currency: 'R ' }}</p>
      </div>
    }
    </div>

    <h2>Extras</h2>
    <div class="extras row">
    @for (item of extras(); track item.name; let i = $index) {
      <div class="item col-md-9">
        <h3 class="name">{{ item.name }}</h3>
        <p class="description">{{ item.description }}</p>
      </div>
      <div class="price col-md-3">
        <p class="price">{{ item.price | currency: 'R ' }}</p>
      </div>
    }
    </div>
  `,
})
export class AppComponent {
  today = new Date();

  appetizers = signal<MenuItem[]>([
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsamic glaze.',
      price: 69.5,
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 45,
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 49.5,
    },
  ]);

  mains = signal<MenuItem[]>([
    {
      name: 'Fiery Veg',
      description:
        'Jalapenos, Mushroom, Peppadew Piquante Peppers, Red Onion, with a Fiery base sauce and Mozzarella Chese.',
      price: 39.9,
    },
    {
      name: 'Cheesy Garlic & Mixed Veg',
      description:
        'Mushroom, Red Onion, Green Pepper, Cheddar Cheese, Parmesan & Oregano with a hint of Garlic, with a Marinara base sauce and Mozzarella Cheese.',
      price: 54.9,
    },
    {
      name: 'Mexicana Vegan',
      description:
        'Soya mince, Diced Tomato, Green Pepper, Jalapenos, Red Onion, Spring Onion with a Marinara base sauce and Mozzarella Cheese.',
      price: 54.9,
    },
  ]);

  extras = signal<MenuItem[]>([
    {
      name: 'Loaded Cheesy Chips',
      description: 'Large chips topped with cheese sauce.',
      price: 44.9,
    },
    {
      name: 'Tofu/Tempeh Sizzlers',
      description:
        '10 Tofu or Tempeh Cocktail sausages with a Dip of your Choice.',
      price: 49.9,
    },
    {
      name: 'Loaded Garlic Bread',
      description:
        '4 pieces of delicious garlic bread with AdLife Peri-Peri Slice!',
      price: 54.9,
    },
  ]);
}

bootstrapApplication(AppComponent);
