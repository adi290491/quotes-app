import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { OnInit } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { QuotesService } from '../../services/quotes';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{

  quoteGroup: {category: string, quotes: Quote[], icon: string};

  constructor(private navParam: NavParams,
  private alertCtrl: AlertController,
  private quotesService: QuotesService){}

  // ionViewDidLoad(){
  //   this.quoteGroup = this.navParam.data;
  //   //add elvis operator (?) to use this approach in template
  // }

  ngOnInit(){
    this.quoteGroup = this.navParam.data;
  }

  onAddToFavoite(selectedQuote: Quote){
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons: [
        {
          text: 'Yes, go ahead',
          handler: () => {
            this.quotesService.addQuoteToFavorites(selectedQuote);
          }
        },
        {
          text: 'No, I changed my mind!',
          role: 'cancel',
          handler: () => {
            console.log('Cancelled!');
          }
        }
      ]
    });

    alert.present();
  }
}
