import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'd3Integration';

  ngOnInit(){
    this.createCircle();
    this.createRectangle();
  }

  createRectangle() {
    var component = this;
    d3.select('svg')
    .append("rect")
    .attr("width","250")
    .attr("height","100")
    .attr("x","200")
    .attr("y","100")
    .attr('fill','violet')
    .on('mouseover',function(d){
      d3.select(this)
      .attr('fill','red')
      .attr('cursor','pointer')
      component.showTooltip(d.pageX,d.pageY)
    })
    .on('mouseout',function(d){
      d3.select(this)
      .attr('fill','violet')
      component.hideTooltip();
    })
  }
  
  createCircle() {
    var component = this;
   d3.select('svg')
   .append("circle")
    .attr("cx","100")
    .attr("cy","150")
    .attr("r","50")
    .attr("fill","green")
    .on('mouseover',function(d){
      d3.select(this)
      .attr('fill','red')
      .attr('cursor','pointer')
      component.showTooltip(d.pageX,d.pageY)
    })
    .on('mouseout',function(d){
      d3.select(this)
      .attr('fill','pink')
      component.hideTooltip();
    })
  }

  showTooltip(x: any,y: any){
    d3.select('.tooltip-container')
          .style('left',(x)+'px')
          .style('top',y+'px')
          .classed('hidden',false)
          .append('p')
          .attr('id', 'myText')
          .append('text')
          .text("Hey");
  }

  hideTooltip(){
    d3.select('.tooltip-container')
          .classed('hidden',true);
          d3.select('#myText').remove().text();
  }
  
}
