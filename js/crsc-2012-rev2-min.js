eval(function (p, a, c, k, e, d) 
{ 
    e = function (c) 
    { 
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36)) 
    }; 
    if (!''.replace(/^/, String)) 
    { 
        while (c--) 
        { 
            d[e(c)] = k[c] || e(c) 
        } 
        k = [function (e) 
            { 
            return d[e] 
            }
        ]; 
        e = function () 
        { 
            return '\\w+' 
        }; 
        c = 1 
    }; 
    while (c--) 
    { 
        if (k[c]) 
        { 
            p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]) 
        } 
    } 
    return p 
}
('
t 22(b)
{
    i a=-1;
    B(i c=b.11.14-1;c>-1;c--)
    {
        9(b.11[c].P)
        {
            a=c;
            c=-1
        }
    }
    9(a==-1)
    {
        1I("1K! 1H 1G 1a. 1D s 1a. 1E 1F 1b 1M 1P 1O 1b 1N.");
        1C 1L
    }
}
t 21(b)
{
    i a=-1;
    B(i c=b.Z.14-1;c>-1;c--)
    {
        9(b.Z[c].P)
        {
            a=c;
            c=-1
        }
    }
    9(a==-1)
    {
        1I("1K! 1H 1G 1a. 1D s 1a. 1E 20 1F 1b 1M 1P 1O 1b 1N.");
        1C 1L
    }
}
t 1Z(d)
{
    i b=l($("#23").1r(),10);
    i a=l($("#1n").7(),10);
    i j=l($("#26").1r(),10);
    i k=l($("#1e").7(),10);
    i f=l($("#1w").7(),10);
    i e=0;
    i h;
    i g;
    B(i c=0;c<V.C.S.11.14;c++)
    {
        9(V.C.S.11[c].P)
        {
            h=V.C.S.11[c].q
        }
    }
    B(c=0;c<V.C.S.Z.14;c++)
    {
        9(V.C.S.Z[c].P)
        {
            g=V.C.S.Z[c].q
        }
    }
    9(h=="1u")
    {
        a=b*0.1q*0.1A;
        $("#1n").7(a.r(2)+" m<v>2</v>")
    }
    o
    {
        9(h=="m")
        {
            a=b*0.1q*1;
            $("#1n").7(a.r(2)+" m<v>2</v>")
        }
    }
    9(g=="1u")
    {
        k=j*0.1A;
        $("#1e").7(k.r(2)+" m<v>2</v>")
    }
    o
    {
        9(g=="m")
        {
            k=j*1;
            $("#1e").7(k.r(2)+" m<v>2</v>")
        }
    }
    f=U(a.r(2))+U(k.r(2));
    $("#1w").7(f.r(2)+" m<v>2</v>");
    e=f/1S;
    9(e>0)
    {
        $("#18").7(1V+" W")
    }
    B(c=0;c<(e-1);c++)
    {
        $("#18").7(U($("#18").7())+1W+" W")
    }
}
t 1T(b)
{
    i c=l(b.1Q.q,10);
    i a=l(b.1U.q,10);
    9(c>0&&c<17)
    {
        $("#D").7(l(c,10)+"  W")
    }
    o
    {
        9(c>=17)
        {
            $("#D").7(1R.2a(17+(c-17)*0.1q)+" W")
        }
        o
        {
            9(c===0)
            {
                $("#D").7(0+" W")
            }
        }
    }
    9(b.1p.P===1j)
    {
        $("#19").7(l($("#D").7(),10)+l(a,10)+" W")
    }
    o
    {
        9(b.1p.P!==1j&&l($("#D").7(),10)>l(a,10))
        {
            $("#19").7(l($("#D").7(),10)+" W")
        }
        o
        {
            9(b.1p.q!==1j&&U($("#D").7())<U(a))
            {
                $("#19").7(l(a,10)+" W")
            }
        }
    }
}
t 2d(a)
{
    9(a.y.q>0&&a.y.q<=1m)
    {
        $("#1c").7(M+" W")
    }
    o
    {
        9(a.y.q>1m)
        {
            $("#1c").7(M+0.4*(U(a.y.q)-1m)+" W")
        }
        o
        {
            9(a.y.q==0)
            {
                $("#1c").7(0+" W")
            }
        }
    }
}
t 2u(a)
{
    $("#1B").7(a.2r.q+" W")
}
t 2p(a)
{
    $("#1t").7(a.2s.q+" W")
}
t 2q(a)
{
    i b=l(a.y.q,10);
    i c=l(a.1x.q,10);
    9(l(a.y.q,10)>0)
    {
        $("#13").7((a.1x.q*0.25)+" W")
    }
    o
    {
        9(b<=0&&c<=M)
        {
            $("#13").7(c)
        }
        o
        {
            9(b<=0&&c>M)
            {
                $("#13").7(M+((c-M)*0.25))
            }
        }
    }
}
t 2n(b)
{
    i d=l($("#18").7(),10);
    i f=l($("#19").7(),10);
    i c=l($("#1c").7(),10);
    i e=l($("#1B").7(),10);
    i a=l($("#13").7(),10);
    i z=l($("#1t").7(),10);
    $("#1l").7((d+f+c+e+a+z)+" W")
}
t 2o(a){
    i d;
    i c=l(C.2h("1e").2f,10);
    i b=l($("#1l").7(),10);
    9(c>1d&&(b/x)<=w)
    {
        $("#12").7(w+" A")
    }
    o{
        9(c>1d&&(b/x)>w)
        {
            d=(b/x);$("#12").7(d.r(0)+" A")
        }
        o
        {
            9(c<1d&&(b/x)<=T)
            {
                $("#12").7(T+" A")
            }
            o
            {
                9(c<1d&&(b/x)>T)
                {
                    d=(b/x);
                    $("#12").7(d.r(0)+" A")
                }
            }
        }
    }
}
t 2i(a){
    i b=l($("#1l").7(),10)/x;
    i c=l($("#12").7(),10);
    9(c<=T)
    {
        $("#Q").7(b.r(2)+" A");
        $("#I").7("#6 n p s #6 n N");
        $("#H").7("w u");
        $("#K").7("T u");
        $("#J").7("#6 n p");
        $("#F").7("#8 n p");
        $("#G").7(\'1"(27) s #6 Y X\');
        $("#O").7("16 15")
    }
        o
        {
            9(c>T&&c<=w)
            {
                $("#Q").7(b.r(2)+" A");
                $("#I").7("#3 n p s #2 n N");
                $("#H").7("w u");
                $("#K").7("w u");
                $("#J").7("#6 n 1g p");
                $("#F").7("#8 n p");
                $("#G").7(\'1.25"(1h) s #3 Y X\');
                $("#O").7("24 15")
            }
            o{
                9(c>w&&c<=1J)
                {
                    $("#Q").7(b.r(2)+" A");
                    $("#I").7("#2 n p s #1/0 n N");
                    $("#H").7("E u");
                    $("#K").7("2j u");
                    $("#J").7("#6 n 1g p");
                    $("#F").7("#6 n p");
                    $("#G").7(\'1.25"(1h) s #2 Y X\');
                    $("#O").7("24 15; 1i 15 9 2m 2l 2k 2t 1o.")
                }
                o
                {
                    9(c>1J&&c<=1k)
                    {
                        $("#Q").7(b.r(2)+" A");
                        $("#I").7("#1/0 n p s #2/0 n N");
                        $("#H").7("E u");
                        $("#K").7("1k u");
                        $("#J").7("#6 n 1g p");
                        $("#F").7("#6 n p");
                        $("#G").7(\'1.25"(1h) s #1/0 Y X\');
                        $("#O").7("1i 1f; 1z 1f 9 1y 1v 1s. 1o.")
                    }
                    o
                    {
                        9(c>1k&&c<=E)
                        {
                            $("#Q").7(b.r(2)+" A");
                            $("#I").7("#2/0 n p s #4/0 n N");
                            $("#H").7("E u");
                            $("#K").7("E u");
                            $("#J").7("#6 n 1g p");
                            $("#F").7("#6 n p");
                            $("#G").7(\'1.5"(2e) B #2/0 p; 2"(2g) B #4/0 N s #3/0 Y X)\');
                            $("#O").7("1i 1f; 1z 1f 9 1y 1v 1s. 1o.")
                        }
                        o
                        {
                            9(c>E)
                            {
                                $("#Q").7(b.r(2)+" A");
                                $("#I").7("2c 28 29 1X 2b 1Y E A.");
                                $("#H").7("R L");
                                $("#K").7("R L");
                                $("#J").7("R L");
                                $("#F").7("R L");
                                $("#G").7("R L");
                                $("#O").7("R L")
                            }
                        }
                    }
                }
            }
        }
    };
    ', 62, 155, '|||||||html||if|||||||||var|||parseInt||AWG|else|Copper|value|toFixed|or|function|Ampere|sup|100|240|formEr|||for|document|eshwResults|200|sbjReq|conReq|metReq|hotReq|sgcReq|ocdReq|above|6000|Aluminum|panReq|checked|ampResults|see|resForm|60|parseFloat|window||TECK|copper|formUnits2||formUnits1|sampReq|alwResults|length|circuits||10000|wtfaResults|shacwResults|sq|the|erwResults|80|cfamResults|cct|Bare|35|30|true|150|twResults|12000|rbfResults|baseboards|simult|75|val|elec|evResults|ft|has|tfaResults|formAl|home|40|09290304|whwResults|return|meters|feet|using|either|Select|alert|120|ALERT|false|radio|left|to|buttons|formEsh|Math|90|funcShAc|formAc|5000|1000|not|beyond|funcWatts|first|funcVal2|funcVal1|formBmt|||formCfa||calculator|does|ceil|size|This|funcEr|41|innerHTML|53|getElementById|funcHot|125|with|is|heating|funcTw|funcSamps|funcEv|funcAl|formWh|formEv|electric|funcWh'.split('|'), 0, {})
)
