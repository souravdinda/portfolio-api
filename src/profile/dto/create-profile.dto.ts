import { ApiProperty } from '@nestjs/swagger';
import { ArrayMinSize, IsArray, IsNotEmpty, IsUrl } from 'class-validator';

export class CreateProfileDto {
  @IsNotEmpty()
  @ApiProperty()
  readonly firstname: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly lastname: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly intro: string;

  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  @ApiProperty()
  readonly jobs: [string];

  @IsNotEmpty()
  @ApiProperty()
  readonly bio: string;

  @IsNotEmpty()
  @ApiProperty({
    type: 'object',
    properties: {
      address: { type: 'string' },
      email: { type: 'string' },
      phone: { type: 'string' },
    },
  })
  readonly contactDetails: {
    readonly address: string;
    readonly email: string;
    readonly phone: string;
  };

  @ApiProperty({
    type: 'object',
    properties: {
      linkedIn: { type: 'string' },
      github: { type: 'string' },
      instagram: { type: 'string' },
      facebook: { type: 'string' },
      x: { type: 'string' },
    },
    required: false,
  })
  readonly socialAccounts: {
    readonly linkedIn?: string;
    readonly github?: string;
    readonly instagram?: string;
    readonly facebook?: string;
    readonly x?: string;
  };

  @IsUrl(
    { require_tld: false },
    { message: 'Invalid URL provided for Profile Image URL' },
  )
  @IsNotEmpty()
  @ApiProperty()
  readonly profileImageUrl: string;

  @IsUrl(
    { require_tld: false },
    { message: 'Invalid URL provided for Bio Image URL' },
  )
  @IsNotEmpty()
  @ApiProperty()
  readonly bioImageUrl: string;

  @IsUrl(
    { require_tld: false },
    { message: 'Invalid URL provided for Bio Image URL' },
  )
  @IsNotEmpty()
  @ApiProperty()
  readonly downloadCvUrl: string;
}
