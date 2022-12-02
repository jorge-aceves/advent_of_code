def read_file(file_name)
  file = File.open(file_name, "r")
  data = file.read
  file.close
  return data
end

def count_in_array(arr)
  count = []
  arr.each do |number|
    number.chars.each_with_index do |c, i|
      count[i] ||= 0
      count[i] += 1 if c == '1'
    end
  end
  count
end

file_name = "input.txt"
arr = read_file(file_name).split("\n")

co2 = arr
o2 = arr

i = 0
until o2.size == 1 do
  count = count_in_array(o2)
  char = count[i] >= (o2.size / 2.to_f).ceil ? '1' : '0'
  o2 = o2.select { |e| e[i] == char }
  i += 1
end

i = 0
until co2.size == 1 do
  count = count_in_array(co2)
  char = count[i] < (co2.size / 2.to_f).ceil ? '1' : '0'
  co2 = co2.select { |e| e[i] == char }
  i += 1
end

puts o2.first.to_i(2) * co2.first.to_i(2)