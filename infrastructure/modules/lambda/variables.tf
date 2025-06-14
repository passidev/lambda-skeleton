variable "name" {
  type = string
}

variable "env" {
  type = string
}

variable "s3_bucket" {
  type = string
}

variable "source_code_hash" {
  type    = string
  default = ""
}