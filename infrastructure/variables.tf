variable "aws_region" {
  type        = string
  description = "AWS region"
}

variable "env" {
  type        = string
  description = "Deployment environment (stage, production, etc)"
}

variable "s3_bucket" {
  type        = string
  description = "Bucket where Lambda artifacts are stored"
}

variable "source_code_hash_auth_login" {
  description = "Hash del código fuente para la función auth-login"
  type        = string
}

variable "source_code_hash_auth_register" {
  description = "Hash del código fuente para la función auth-register"
  type        = string
}