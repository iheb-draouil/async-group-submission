<?php

namespace App;

class Solution
{
    static function getWinningLines(array $screen, array $pay_lines): array
    {
        $result = [];

        foreach ($pay_lines as $pay_line_index => $pay_line) {

            $result_cache = [];

            $target = null;
            $target_sequence = [];
            
            for ($i = 0; $i < count($pay_line); $i++) {
            	
                [$x, $y] = $pay_line[$i];
                
                if (isset($screen[$x][$y])) {

                    if ($target != null) {
                        
                        if ($target == $screen[$x][$y]
                            || in_array($target, [1, 2])
                            || in_array($screen[$x][$y], [1, 2])) {
                            $target = $screen[$x][$y];
                            $target_sequence[] = [$x, $y];
                        }

                        else {
                            $result_cache[count($target_sequence)] = $target_sequence;
                            $target = $screen[$x][$y];
                            $target_sequence = [[$x, $y]];
                        }

                    }

                    else {
                        $target = $screen[$x][$y];
                        $target_sequence[] = [$x, $y];
                    }

                }

                else {
                    $result_cache[count($target_sequence)] = $target_sequence;
                    $target = null;
                    $target_sequence = [];
                }
                
            }
            
            if ($target != null) {
                $result_cache[count($target_sequence)] = $target_sequence;
            }
            
            if (count($result_cache) != 0) {

                ksort($result_cache);

                $longest_sequence = array_pop($result_cache);
                
                if (count($longest_sequence) >= 3) {

	                $result[$pay_line_index + 1] = [
	                    'win' => '0.05',
	                    'positions' => $longest_sequence,
	                    'matches' => count($longest_sequence),
	                ];
	                
                }

            }

        }
        
        return $result;
    }
}