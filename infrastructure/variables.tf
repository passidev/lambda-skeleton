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
  description = "Bucket where the Lambda artifact is stored"
}

variable "source_code_hash" {
  type        = string
  description = "Optional: base64 hash of the function.zip"
  default     = ""
}