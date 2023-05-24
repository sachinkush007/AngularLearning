import { Component, OnInit } from '@angular/core';
interface Photo {
  url: string;
  likes: number;
  comments: Comment[];
}

interface Comment {
  text: string;
}

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css'],
})
export class PhotoListComponent implements OnInit {
  photos: Photo[] = [];
  selectedFile!: File;
  likes: number = 0;
  commentText = '';

  constructor() {}

  ngOnInit(): void {
    // Retrieve photos from local storage if they exist
    const photosJson = localStorage.getItem('photos');
    if (photosJson) {
      this.photos = JSON.parse(photosJson);
    }
  }
  savePhoto() {
    localStorage.setItem('photos', JSON.stringify(this.photos));
  }
  onFileSelected(event: Event) {
    console.log(event + 'event works');
    const target = event.target as HTMLInputElement;
    if (target && target.files && target.files.length) {
      this.selectedFile = target.files[0];
    }
  }

  onUpload() {
    const reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload = () => {
      const photoUrl = reader.result as string;
      const photo: Photo = {
        url: photoUrl,
        likes: 0,
        comments: [],
      };
      this.photos.push(photo);
      this.savePhoto();
    };
  }

  onLike(photo: Photo) {
    photo.likes++;
    this.savePhoto();
  }

  // onComment(photo: Photo, text: string) {
  //   photo.comments.push({ text });
  //   this.savePhoto();
  // }
  onComment(photo: Photo) {
    if (this.commentText.trim() !== '') {
      photo.comments.push({ text: this.commentText });
      this.commentText = '';
      this.savePhoto();
    }
  }

  onDelete(photo: Photo) {
    const index = this.photos.indexOf(photo);
    if (index >= 0) {
      this.photos.splice(index, 1);
      localStorage.setItem('photos', JSON.stringify(this.photos));
    }
  }
}
