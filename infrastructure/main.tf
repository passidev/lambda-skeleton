provider "aws" {
  region = var.aws_region
}

module "auth_lambda" {
  source            = "./modules/lambda"
  name              = "auth-service"
  env               = var.env
  s3_bucket         = var.s3_bucket
  source_code_hash  = var.source_code_hash
}