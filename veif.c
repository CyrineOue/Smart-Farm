int verifier (char login[50], char password[50])
{
   int res=-1;
    char Login[50] ;
    char Password[50];
    int role;
    FILE* f;
   f=fopen("/home/kaies/user.txt","r");

   do
   {
     fscanf(f, "%s %s %d",Login,Password,&role);
     if (strcmp(login,Login)==0)
         {
             if(strcmp(password,Password)==0)
             {
                 res=role;
             }
         }

     } while(!feof(f)&&(res==-1));
     return res ;
}
