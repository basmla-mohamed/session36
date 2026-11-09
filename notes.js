/*
Session 36 notes

1- Index 
@for (product of products; track $index) {
  <p>{{ $index }} {{ product }}</p>
}

2- first
@for (product of products; track $index) {
  @if ($first) {
    <p>First Item: {{ product }}</p>
  }
}
       => first return boolean true or false

3- LAST 
@for (product of products; track $index) {
  @if ($last) {
    <p>Last Item: {{ product }}</p>
  }
}

4- count
@for (product of products; track $index) {
  <p>{{ product }} : {{ $count }}</p>
}

5- @for (product of products; track $index) {
  <p>
    Index: {{ $index }}
    First: {{ $first }}
    Last: {{ $last }}
    Count: {{ $count }}
  </p>
}

6- this is new forLoop but the old that when we use   ng-template(else)  ng-container(if)

7- ts:

inputValue = "";
showValue(event: any) {
  this.inputValue = event.target.value;
}

html:

<input (keyup)="showValue($event)">
<p>{{ inputValue }}</p>

8- we receive the event by dollar sign$

9- to give any compònent any attribute or that we have 2 ways 

10-the new way
EX1:
@component({
imports:[],
selector:"app-root",
styleUrl:"app-scss",
templateUrl:"app-ts",
host:{
     data-index=5;
}

11- 
EX2:
@component({
imports:[],
selector:"app-root",
styleUrl:"app-scss",
templateUrl:"app-ts",
host:{
     [attr.data-index]="num";
}

export class app{
num=5;
}

12-
EX3:
@component({
imports:[],
selector:"app-root",
styleUrl:"app-scss",
templateUrl:"app-ts",
host:{
     class:"bg-info d-block";
}

13- any component already have display inline because that we must make it block to make it
take many classes such as color,background,width,height,......

14-
EX4:
@component({
imports:[],
selector:"app-root",
styleUrl:"app-scss",
templateUrl:"app-ts",
host:{
     [style.color]:red;
}

15-
EX5:
@component({
imports:[],
selector:"app-root",
styleUrl:"app-scss",
templateUrl:"app-ts",
host:{
     (click):"toggleActive()";
}

16- 
Ex6:
@component({
imports:[],
selector:"app-root",
styleUrl:"app-scss",
templateUrl:"app-ts",
host:{
     (window:click):"updateActive()";
}

17- old way
export class App{
@HostBinding("attr.data-role"){
x="admin"
}
}

18- HOST LISTNER
export class App{
@HostListner(click){
updateNum(){
num++;
}
}

19- control flow syntax
If,else,forLoop new

20- if 
@if (isLoggedIn) {
  <h2>Welcome User</h2>
}

21- else
@if (isLoggedIn) {
  <h2>Welcome User</h2>
} @else {
  <h2>Please Login</h2>
}

22-else if
@if (grade >= 90) {
  <p>Excellent</p>
} @else if (grade >= 50) {
  <p>Passed</p>
} @else {
  <p>Failed</p>
}

23- empty for loop
@for (product of products; track product.id) {
  <p>{{ product.name }}</p>
} @empty {
  <p>No products found!</p>
}
  we use it when the loop may be empty
*/
