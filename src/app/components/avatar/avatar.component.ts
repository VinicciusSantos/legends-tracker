import { Component, OnInit, Input } from '@angular/core';
import { AvatarBorderOptions } from '../core/types/avatar';
import { SizeType } from '../core/types/size';

type TypeBorder = "true" | "false";

export interface AppAvatarProps {
  size: SizeType;
  image?: string;
  onErrorImage?: string;
  border?: string;
}

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  @Input() size?: SizeType = 'md'; 
  @Input() image?: string;
  @Input() onErrorImage?: string;
  @Input() border: TypeBorder = "true";

  public defaultImage = "../../assets/user.svg";
  public type!: AvatarBorderOptions;

  ngOnInit(): void {
    this.type = AvatarBorderOptions[this.border];
  }
}