import { Component, OnInit } from '@angular/core';
import blog from '../../../data/blog/blog.json';
import category from '../../../data/blog/category.json';
import tags from '../../../data/blog/tags.json';
import instagram from '../../../data/instagram.json';
import twitterfeeds from '../../../data/twitterfeeds.json';

@Component({
  selector: 'app-blogsidebar',
  templateUrl: './blogsidebar.component.html',
  styleUrls: ['./blogsidebar.component.css']
})
export class BlogsidebarComponent implements OnInit {

  constructor() { }
  public blog: any[] = [];
  public category: any[] = category;
  public tags: any[] = tags;
  public instagram: any[] = instagram;
  public twitterfeeds: any[] = twitterfeeds;

  public setCategoriesCount() {
    for (var i = 0; i < this.category.length; i++) {
      var count = blog.filter((post: { category: number[]; }) => { return post.category.includes(parseInt(this.category[i].id)) });
      count = count.length;
      this.category[i].count = count;
    }
  }
  ngOnInit(): void {
    this.setCategoriesCount();
  }

}
