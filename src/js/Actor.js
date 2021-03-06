import * as Shapes from './_shapes.js';
import { Point, Size } from './_objects.js';

  export default class Actor {
    constructor(options = {}) {
     this.ctx = options.ctx;

     this.tags = {
      offense: 'abbac',
      defense: 'ccd',
      mating: 'aab'
    };

    this.conditions = {
      combat: 'bba',
      trade: 'c',
      mating: 'cddbb'
    };

    this.trade = 'a';

    this.uptake = [true, false, true, true];

    this.genome = {
      tags: this.tags,
      conditions: this.conditions,
      trade: this.trade,
      uptake: this.uptake
    };

    this.position = options.position || new Point(500, 100);

    this.size = options.size || new Size(100, 50);
    
    this.shape = new Shapes.Triangle({
      ctx: this.ctx,
      position: this.position,
      size: this.size
    });


  }

  draw() {
   this.shape.draw();
 }
}
