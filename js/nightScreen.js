export default class nightScreen extends Phaser.Scene {
  
    constructor () {
      super({key: 'nightScreen'})}

     

      preload () { 
        

        this.load.image('background', '../assets/nighttime.png' )
        this.load.image('foodButton', '../assets/food.png')
        this.load.image('healthButton', '../assets/health.png')
      
      }
      
      create () {
        let healthMeter = 0;
        let foodMeter = 0;
       
        let foodInv = 10;
       
        let healthItem = 10;

        this.add.image(240, 180, 'background');

       

        //mckfreaking health

        const health = this.add.image(25, 200, 'healthButton').setInteractive();
       
        const healthText = this.add.text(0, 150, 'Health: 0')

        const healInvText = this.add.text(0, 275, 'Healing Items: ');

        health.on('pointerdown', function () {
            if (healthMeter <= 4 & healthItem > 0){
                healthMeter ++;
                healthItem--
            }
           
            healthText.setText('Health: ' + healthMeter)
           
            healInvText.setText('Healing Items: ' + healthItem)

            })


        //mcfreaking feed
        const feed = this.add.image(25, 85, 'foodButton').setInteractive();

        const foodText = this.add.text(0, 25, 'Hunger: 0');
        const foodInvText = this.add.text(0, 250, 'food storage: ');

        feed.on('pointerdown', function () {
            if (foodMeter <= 4 & foodInv > 0){
                foodMeter ++;
                foodInv--
            }
           
            foodText.setText('hunger: ' + foodMeter)
           
            foodInvText.setText('food storage: ' + foodInv)

            })



        




 


      


  


      
    }
      
      update () {

    

           
            
      
      }


  }