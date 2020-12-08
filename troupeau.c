#include <troupeau.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <gtk/gtk.h>


void ajouter_troupeaux(troupeau t)
{

          FILE *f;
          f=fopen("troupeaux.txt","a+");
    if(f!=NULL)
       {
 	   fprintf(f,"%s %s %s %s %d %d %d %s %s \n",t.identifiant,t.sexe,t.type,t.couleur,t.date_naissance.jour,t.date_naissance.mois,t.date_naissance.annee,t.poids,t.etat);
       }
           fclose(f);
}

////////////////////////////////////////////////////////////

enum
{
	IDENTIFIANT,
	SEXE,
	TYPE,
	COULEUR,
	DATE,
	POIDS,
	ETAT,
	COLUMNS
};
void afficher(GtkWidget *liste,troupeau t)
{      
        char date[20];
       
  	GtkCellRenderer *renderer;
  	GtkTreeViewColumn *column;
  	GtkTreeIter iter;
  	GtkListStore *store;

        
       store=NULL;

           FILE*f;
     store=gtk_tree_view_get_model(liste);
       if(store==NULL)
        {
          renderer = gtk_cell_renderer_text_new();
          column = gtk_tree_view_column_new_with_attributes(" identifiant",renderer,"text",IDENTIFIANT, NULL);
          gtk_tree_view_append_column (GTK_TREE_VIEW (liste), column);


          renderer = gtk_cell_renderer_text_new();
          column = gtk_tree_view_column_new_with_attributes(" sexe",renderer,"text",SEXE, NULL);
          gtk_tree_view_append_column (GTK_TREE_VIEW (liste), column);


          renderer = gtk_cell_renderer_text_new();
          column = gtk_tree_view_column_new_with_attributes(" type",renderer,"text",TYPE, NULL);
          gtk_tree_view_append_column (GTK_TREE_VIEW (liste), column);

           renderer = gtk_cell_renderer_text_new();
          column = gtk_tree_view_column_new_with_attributes(" couleur",renderer,"text",COULEUR, NULL);
          gtk_tree_view_append_column (GTK_TREE_VIEW (liste), column);


          renderer = gtk_cell_renderer_text_new();
         column = gtk_tree_view_column_new_with_attributes(" date",renderer,"text",DATE, NULL);
         gtk_tree_view_append_column (GTK_TREE_VIEW (liste), column);


          renderer = gtk_cell_renderer_text_new();
          column = gtk_tree_view_column_new_with_attributes(" poids",renderer,"text",POIDS, NULL);
          gtk_tree_view_append_column (GTK_TREE_VIEW (liste), column);

          renderer = gtk_cell_renderer_text_new();
          column = gtk_tree_view_column_new_with_attributes(" etat",renderer,"text",ETAT, NULL);
          gtk_tree_view_append_column (GTK_TREE_VIEW (liste), column);


      }
store=gtk_list_store_new(COLUMNS, G_TYPE_STRING, G_TYPE_STRING, G_TYPE_STRING,G_TYPE_STRING,G_TYPE_STRING,G_TYPE_STRING,G_TYPE_STRING);

f=fopen("troupeaux.txt","r");
    if(f==NULL)
        { return;
        }
    else
        {
          f=fopen("troupeaux.txt","a+"); 

while(fscanf(f,"%s %s %s %s %d %d %d  %s %s\n",t.identifiant,t.sexe,t.type,t.couleur,&t.date_naissance.jour,&t.date_naissance.mois,&t.date_naissance.annee,t.poids,t.etat)!=EOF)
         {
	sprintf(date,"%d/%d/%d", t.date_naissance.jour,t.date_naissance.mois,t.date_naissance.annee);

	 gtk_list_store_append (store, &iter);
	 
	gtk_list_store_set (store, &iter, IDENTIFIANT, t.identifiant, SEXE,t.sexe, TYPE,t.type,COULEUR,t.couleur,DATE,date,POIDS,t.poids,ETAT,t.etat,-1);
         }
       fclose(f);

       gtk_tree_view_set_model (GTK_TREE_VIEW (liste), GTK_TREE_MODEL (store));
       g_object_unref (store);


       }
}


///////////////////////////////////////////////////////////////////////////
void supprimer(char *id)
{

troupeau t1;
FILE *f ,*F;

f=fopen("troupeaux.txt","r"); 
F=fopen("temptroupeaux.txt","w"); 

if ((f==NULL) || (F==NULL))
{
return ; 
}
else 
{
while(fscanf(f,"%s %s %s %s %d %d %d %s %s  \n",t1.identifiant,t1.sexe,t1.type,t1.couleur,&t1.date_naissance.jour,&t1.date_naissance.mois,&t1.date_naissance.annee,t1.poids,t1.etat)!=EOF)
	{
	  if (strcmp(id,t1.identifiant)!=0)
	{
	   fprintf(F,"%s %s %s %s %d %d %d %s %s \n",t1.identifiant,t1.sexe,t1.type,t1.couleur,t1.date_naissance.jour,t1.date_naissance.mois,t1.date_naissance.annee,t1.poids,t1.etat);
	}
	}
	fclose(f);
	fclose(F);
remove("troupeaux.txt");
rename("temptroupeaux.txt","troupeaux.txt");
}
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////

void rechercher_par_type (troupeau t,char type[20])
{
	
       
        FILE *f;
	FILE *f1;
        f=fopen("troupeaux.txt","r");
        f1=fopen("troupeaux2.txt","w");
        if(f==NULL)
{return;}
else    {

 while (fscanf(f,"%s %s %s %s %d %d %d %s %s  \n",t.identifiant,t.sexe,t.type,t.couleur,&t.date_naissance.jour,&t.date_naissance.mois,&t.date_naissance.annee,t.poids,t.etat)!=EOF)
        {
                 if(strcmp(t.type,type)==0)
                 
			{

	fprintf(f1,"%s %s %s %s %d %d %d %s %s \n",t.identifiant,t.sexe,t.type,t.couleur,t.date_naissance.jour,t.date_naissance.mois,t.date_naissance.annee,t.poids,t.etat); 
                  
                        }
       }

       }
                       fclose(f);
                       fclose(f1);
        
   }


//////////////////////////////////////////
void afficher_rech(GtkWidget *liste,troupeau t)

{        
        char date[30];

  	GtkCellRenderer *renderer;
  	GtkTreeViewColumn *column;
  	GtkTreeIter iter;
  	GtkListStore *store;

        
       store=NULL;

           FILE*f;
     store=gtk_tree_view_get_model(liste);
       if(store==NULL)
        {
          renderer = gtk_cell_renderer_text_new();
          column = gtk_tree_view_column_new_with_attributes(" identifiant",renderer,"text",IDENTIFIANT, NULL);
          gtk_tree_view_append_column (GTK_TREE_VIEW (liste), column);


          renderer = gtk_cell_renderer_text_new();
          column = gtk_tree_view_column_new_with_attributes(" sexe",renderer,"text",SEXE, NULL);
          gtk_tree_view_append_column (GTK_TREE_VIEW (liste), column);


          renderer = gtk_cell_renderer_text_new();
          column = gtk_tree_view_column_new_with_attributes(" type",renderer,"text",TYPE, NULL);
          gtk_tree_view_append_column (GTK_TREE_VIEW (liste), column);

           renderer = gtk_cell_renderer_text_new();
          column = gtk_tree_view_column_new_with_attributes(" couleur",renderer,"text",COULEUR, NULL);
          gtk_tree_view_append_column (GTK_TREE_VIEW (liste), column);


          renderer = gtk_cell_renderer_text_new();
         column = gtk_tree_view_column_new_with_attributes(" date",renderer,"text",DATE, NULL);
         gtk_tree_view_append_column (GTK_TREE_VIEW (liste), column);


          renderer = gtk_cell_renderer_text_new();
          column = gtk_tree_view_column_new_with_attributes(" poids",renderer,"text",POIDS, NULL);
          gtk_tree_view_append_column (GTK_TREE_VIEW (liste), column);

          renderer = gtk_cell_renderer_text_new();
          column = gtk_tree_view_column_new_with_attributes(" etat",renderer,"text",ETAT, NULL);
          gtk_tree_view_append_column (GTK_TREE_VIEW (liste), column);


      }
store=gtk_list_store_new(COLUMNS, G_TYPE_STRING, G_TYPE_STRING, G_TYPE_STRING,G_TYPE_STRING,G_TYPE_STRING,G_TYPE_STRING,G_TYPE_STRING);

f=fopen("troupeaux2.txt","r");
    if(f==NULL)
        { return;
        }
    else
        {
          f=fopen("troupeaux2.txt","a+"); 

while(fscanf(f,"%s %s %s %s %d %d %d  %s %s\n",t.identifiant,t.sexe,t.type,t.couleur,&t.date_naissance.jour,&t.date_naissance.mois,&t.date_naissance.annee,t.poids,t.etat)!=EOF)
         {
	sprintf(date,"%d/%d/%d", t.date_naissance.jour,t.date_naissance.mois,t.date_naissance.annee);

	 gtk_list_store_append (store, &iter);
	 
	gtk_list_store_set (store, &iter, IDENTIFIANT, t.identifiant, SEXE,t.sexe, TYPE,t.type,COULEUR,t.couleur,DATE,date,POIDS,t.poids,ETAT,t.etat,-1);
         }
       fclose(f);

       gtk_tree_view_set_model (GTK_TREE_VIEW (liste), GTK_TREE_MODEL (store));
       g_object_unref (store);


       }
}
/////////////////////////////////////////////////////////////////////////
int Somme ()
{
    FILE *f,*f1;
    troupeau t;
 int nbr=0;
    f=fopen("troupeaux.txt","r");
    f1=fopen("troupeaux0.txt","w");
if((f!=NULL)||(f1!=NULL))
{
      while (fscanf(f,"%s %s %s %s %d %d %d %s %s  \n",t.identifiant,t.sexe,t.type,t.couleur,&t.date_naissance.jour,&t.date_naissance.mois,&t.date_naissance.annee,t.poids,t.etat)!=EOF) 
             { 
                    
                        nbr++;
             } 
             
               fprintf(f1,"la somme est %d\n",nbr);   
}
         
              fclose(f);
	      fclose(f1);
             return nbr;
 }





