function board_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[87.67,-109.1137249],[87.67,-49.9332702]]).appendArc([89.934481,-47.0248322],{"radius":3,"clockwise":true,"large":false}).appendPoint([164.8443404,-28.0807727]).appendArc([166.1585135,-28.0455464],{"radius":3,"clockwise":true,"large":false}).appendPoint([187.1665593,-32.1752262]).appendArc([187.5149562,-32.265721],{"radius":3,"clockwise":true,"large":false}).appendPoint([249.5356917,-52.4174796]).appendArc([251.6081304,-55.3259781],{"radius":3,"clockwise":true,"large":false}).appendPoint([250.1920865,-132.0923161]).appendArc([249.6797095,-133.7145658],{"radius":3,"clockwise":true,"large":false}).appendPoint([227.729151,-166.2576071]).appendArc([223.5529185,-167.0593176],{"radius":3,"clockwise":true,"large":false}).appendPoint([208.3279543,-156.6866725]).appendArc([208.0932633,-156.5421025],{"radius":3,"clockwise":false,"large":false}).appendPoint([190.3544455,-146.7093152]).appendArc([190.1215042,-146.5931071],{"radius":3,"clockwise":false,"large":false}).appendPoint([170.6896162,-137.9306164]).appendArc([170.3838007,-137.8138418],{"radius":3,"clockwise":false,"large":false}).appendPoint([89.754328,-111.9705667]).appendArc([87.67,-109.1137249],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1.2] });
}




                function bottom_case_fn() {
                    

                // creating part 0 of case bottom
                let bottom__part_0 = board_extrude_1_2_outline_fn();

                // make sure that rotations are relative
                let bottom__part_0_bounds = bottom__part_0.getBounds();
                let bottom__part_0_x = bottom__part_0_bounds[0].x + (bottom__part_0_bounds[1].x - bottom__part_0_bounds[0].x) / 2
                let bottom__part_0_y = bottom__part_0_bounds[0].y + (bottom__part_0_bounds[1].y - bottom__part_0_bounds[0].y) / 2
                bottom__part_0 = translate([-bottom__part_0_x, -bottom__part_0_y, 0], bottom__part_0);
                bottom__part_0 = rotate([0,0,0], bottom__part_0);
                bottom__part_0 = translate([bottom__part_0_x, bottom__part_0_y, 0], bottom__part_0);

                bottom__part_0 = translate([0,0,0], bottom__part_0);
                let result = bottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_fn();
            }

        