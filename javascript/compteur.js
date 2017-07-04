<script language="JavaScript" >

 function t()
                {
            var
            s=duree;
            m=0;h=0;
            if(s<0)
                        {

                                $( ".delete" ).remove();
                                $( "div" ).removeClass("hide");


            }
                        else
                        {
                                if(s>59)
                                {
                                        m=Math.floor(s/60);
                                        s=s-m*60
                }
                                if(m>59)
                                {
                                        h=Math.floor(m/60);
                    m=m-h*60
                                }
                if(s<10)
                                {
                                        s="0"+s
                }
                if(m<10)
                                {
                    m="0"+m
                }
                  compteur.innerHTML=h+":"+m+":"+s+"<br />"
            }
            duree=duree-1;
            window.setTimeout("t();",999);

        }

                </script>
                <div id="compteur" class="bg-orange padded-light delete"></div>
                <script language="JavaScript">
                        duree="10";
                        t();
                </script>
